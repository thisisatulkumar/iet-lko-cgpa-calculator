"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import Info from "./Info";
import SGPADialog from "./SGPADialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    sgpaFormSchema,
    SGPAFormValues,
} from "@/core/schemas/sgpa.schema";

import { SUBJECTS } from "@/core/constants/subjects";

import { calculateSGPA } from "@/utils/calculateSGPA";

const SGPAForm = () => {
    const [sgpa, setSgpa] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);
    
    const form = useForm({
        resolver: zodResolver(sgpaFormSchema),
        defaultValues: {},
    });

    const { register, handleSubmit, formState } = form;

    const onSubmit = (data: SGPAFormValues) => {
        const sgpa = calculateSGPA(data);

        setSgpa(Number(sgpa));
        setOpen(true);
    };

    const onOpenChange = () => {
        setOpen(false);
    }

    return (
        <form 
            onSubmit={handleSubmit(onSubmit)} 
            className="space-y-4 w-screen md:w-[50vw] p-8"
        >
            {/* Labels and Inputs */}
            {SUBJECTS.map((subject) => (
                <div key={subject.name}>
                    <Label className="block font-medium mb-1">
                        {subject.name} ({subject.credits} {subject.credits > 1 ? 'credits' : 'credit'})
                    </Label>

                    <Input
                        type="number"
                        {...register(subject.name)}
                        className="border p-2 w-full"
                    />

                    {formState.errors[subject.name] && (
                        <p className="text-red-500 text-sm">
                            {formState.errors[subject.name]?.message}
                        </p>
                    )}
                </div>
            ))}

            {/* Submit Button */}
            <Button
                type="submit"
                className="cursor-pointer"
            >
                Calculate SGPA
            </Button>

            {/* Info Text */}
            <Info />

            <SGPADialog 
                sgpa={sgpa}
                open={open}
                onOpenChange={onOpenChange}
            />
        </form>
    );
}

export default SGPAForm
