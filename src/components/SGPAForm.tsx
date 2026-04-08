"use client";

import { useEffect, useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSequentialFocus } from "@/hooks/useSequentialFocus";

import SGPADialog from "./SGPADialog";

import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

import {
    sgpaFormSchema,
    SGPAFormValues,
} from "@/core/schemas/sgpa.schema";

import { getSubjects } from "@/utils/getSubjects";
import { calculateSGPA } from "@/utils/calculateSGPA";
import { shouldAutoAdvanceInput } from "@/utils/shouldAutoAdvanceInput";

import type { Semester } from "@/types/semester";
import type { Branch } from "@/types/branch";

interface SGPAFormProps {
    semester: Semester;
    branch: Branch;
}

const SGPAForm = ({ semester, branch }: SGPAFormProps) => {
    const [sgpa, setSgpa] = useState<number>(0);
    const [open, setOpen] = useState<boolean>(false);

    const form = useForm({
        resolver: zodResolver(sgpaFormSchema),
        defaultValues: {},
    });

    const { register, handleSubmit, reset, formState } = form;

    const { refs, focusNext } = useSequentialFocus();

    const subjects = getSubjects(semester, branch);

    const onSubmit = (data: SGPAFormValues) => {
        const sgpa = calculateSGPA(data, subjects);
        setSgpa(Number(sgpa));

        setOpen(true);
    };

    const onOpenChange = () => {
        setOpen(false);
    }

    useEffect(() => {
        reset();    
    }, [semester, branch, reset]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-screen md:w-[50vw] p-8"
        >
            {subjects.length > 0 ? subjects.map((subject, index) => {
                const { ref, onChange, ...rest } = register(subject.name);

                return (
                    <div key={subject.name}>
                        <Label
                            className="block font-medium mb-1"
                            htmlFor={subject.name}
                        >
                            {subject.name} ({subject.credits} {subject.credits > 1 ? 'credits' : 'credit'})
                        </Label>

                        <Input
                            id={subject.name}
                            type="number"
                            {...rest}
                            className="border p-2 w-full"

                            // Sequential Focus Logic
                            ref={elem => {
                                ref(elem);                      // react-hook-form ref assignment
                                refs.current[index] = elem;     // Sequential focus ref assignment
                            }}
                            onChange={event => {
                                onChange(event);                 // react-hook-form onChange handler

                                if (shouldAutoAdvanceInput(event.target.value)) {
                                    focusNext(index);
                                }
                            }}
                        />

                        {formState.errors[subject.name] && (
                            <p className="text-red-500 text-sm">
                                {formState.errors[subject.name]?.message}
                            </p>
                        )}
                    </div>
                )
            }) : (
                <p className="text-center text-gray-500">
                    Coming soon...
                </p>
            )}

            {subjects.length > 0 && (
                <Button
                    type="submit"
                    className="cursor-pointer"
                >
                    Calculate SGPA
                </Button>
            )}

            <SGPADialog
                sgpa={sgpa}
                open={open}
                onOpenChange={onOpenChange}
            />
        </form>
    );
}

export default SGPAForm;
