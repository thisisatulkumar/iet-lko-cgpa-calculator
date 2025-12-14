"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { SUBJECTS } from "@/core/constants/subjects";
import {
    sgpaFormSchema,
    SGPAFormValues,
} from "@/core/schemas/sgpa.schema";
import { calculateSGPA } from "@/utils/calculateSGPA";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function SGPAForm() {
    const form = useForm({
        resolver: zodResolver(sgpaFormSchema),
        defaultValues: {},
    });

    const { register, handleSubmit, formState } = form;

    const onSubmit = (data: SGPAFormValues) => {
        const sgpa = calculateSGPA(data);

        alert(`Your SGPA is ${sgpa}`);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-[85vw] md:w-[50vw] p-8">
            {SUBJECTS.map((subject) => (
                <div 
                    key={subject.name}
                >
                    <Label className="block font-medium mb-1">
                        {subject.name} ({subject.credits} credits)
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

            <Button
                type="submit"
                className="cursor-pointer"
            >
                Calculate SGPA
            </Button>
        </form>
    );
}
