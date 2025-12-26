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
    const [sgpa, setSgpa] = useState<number>(0);        // Calculated SGPA
    const [open, setOpen] = useState<boolean>(false);   // SGPA Dialog Box

    const form = useForm({
        resolver: zodResolver(sgpaFormSchema),
        defaultValues: {},
    });

    const { register, handleSubmit, reset, formState } = form;

    const { refs, focusNext } = useSequentialFocus();

    // Get subjects based on selected semester and branch
    const subjects = getSubjects(semester, branch);

    // Function: Handles form submission
    const onSubmit = (data: SGPAFormValues) => {
        const sgpa = calculateSGPA(data, subjects);
        setSgpa(Number(sgpa));

        // Show the dialog box
        setOpen(true);
    };

    // Function: When someone tries to close the dialog box, set the 'open' state to 'false'
    const onOpenChange = () => {
        setOpen(false);
    }

    // Reset form fields when semester or branch changes
    useEffect(() => {
        reset();    
    }, [semester, branch, reset]);

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-screen md:w-[50vw] p-8"
        >
            {/* Labels and Inputs */}
            {subjects.length > 0 ? subjects.map((subject, index) => {
                const { ref, onChange, ...rest } = register(subject.name);

                return (
                    <div key={subject.name}>

                        {/* Label */}
                        <Label
                            className="block font-medium mb-1"
                            htmlFor={subject.name}
                        >
                            {subject.name} ({subject.credits} {subject.credits > 1 ? 'credits' : 'credit'})
                        </Label>

                        {/* Input */}
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

                        {/* Error container - shows up only when a validation error occurs */}
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

            {/* Submit Button */}
            {subjects.length > 0 && (
                <Button
                    type="submit"
                    className="cursor-pointer"
                >
                    Calculate SGPA
                </Button>
            )}

            {/* Dialog Box that displays the SGPA */}
            <SGPADialog
                sgpa={sgpa}
                open={open}
                onOpenChange={onOpenChange}
            />
        </form>
    );
}

export default SGPAForm;
