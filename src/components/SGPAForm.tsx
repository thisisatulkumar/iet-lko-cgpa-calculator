"use client";

import { useState } from "react";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { useSequentialFocus } from "@/hooks/useSequentialFocus";

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
import { shouldAutoAdvanceInput } from "@/utils/shouldAutoAdvanceInput";

const SGPAForm = () => {
    const [sgpa, setSgpa] = useState<number>(0);        // Calculated SGPA
    const [open, setOpen] = useState<boolean>(false);   // SGPA Dialog Box

    const form = useForm({
        resolver: zodResolver(sgpaFormSchema),
        defaultValues: {},
    });

    const { register, handleSubmit, formState } = form;

    const { refs, focusNext } = useSequentialFocus();

    // Function: Handles form submission
    const onSubmit = (data: SGPAFormValues) => {
        const sgpa = calculateSGPA(data);
        setSgpa(Number(sgpa));

        // Show the dialog box
        setOpen(true);
    };

    // Function: When someone tries to close the dialog box, set the 'open' state to 'false'
    const onOpenChange = () => {
        setOpen(false);
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-4 w-screen md:w-[50vw] p-8"
        >
            {/* Labels and Inputs */}
            {SUBJECTS.map((subject, index) => {
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
            })}

            {/* Submit Button */}
            <Button
                type="submit"
                className="cursor-pointer"
            >
                Calculate SGPA
            </Button>

            {/* Info Text */}
            <Info />

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
