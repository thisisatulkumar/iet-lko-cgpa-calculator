'use client';

import { useState } from "react";

import SGPAForm from "@/components/SGPAForm";
import GradingTable from "@/components/GradingTable";
import SGPAFormula from "@/components/SGPAFormula";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { SEMESTERS } from "@/core/constants/semesters";
import { BRANCHES } from "@/core/constants/branches";

import type { Semester } from "@/types/semester";
import type { Branch } from "@/types/branch";

const Home = () => {
    // Retrieve saved semester and branch from localStorage, if any
    const savedSemester = localStorage.getItem("semester") as Semester || null;
    const savedBranch = localStorage.getItem("branch") as Branch || null;

    const [semester, setSemester] = useState<Semester>(savedSemester || SEMESTERS[1].value);    // Default to Sem 1
    const [branch, setBranch] = useState<Branch>(savedBranch || BRANCHES.CE);                   // Default to CE branch

    // Function: Change semester state and save to localStorage
    const handleSemesterChange = (value: Semester) => {
        setSemester(value);

        localStorage.setItem("semester", value);
    }

    // Function: Change branch state and save to localStorage
    const handleBranchChange = (value: Branch) => {
        setBranch(value);

        localStorage.setItem("branch", value);
    }
    
    return (
        <div className="flex flex-col justify-center items-center">

            {/* Select 'semester' and 'branch' */}
            <div className="flex gap-4 mt-4">

                {/* Semester */}
                <Select
                    value={semester}
                    onValueChange={value => handleSemesterChange(value as Semester)}
                >
                    <SelectTrigger className="w-30 sm:w-45">
                        <SelectValue placeholder="Semester" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Semester</SelectLabel>

                            {Object.values(SEMESTERS).map(sem => (
                                <SelectItem 
                                    key={sem.value} 
                                    value={sem.value}
                                >
                                    {sem.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>

                {/* Branch */}
                <Select
                    value={branch}
                    onValueChange={(value) => handleBranchChange(value as Branch)}
                >
                    <SelectTrigger className="w-30 sm:w-45">
                        <SelectValue placeholder="Branch" />
                    </SelectTrigger>

                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Branch</SelectLabel>

                            {Object.values(BRANCHES).map(br => (
                                <SelectItem
                                    key={br.value}
                                    value={br.value}
                                >
                                    {br.label}
                                </SelectItem>
                            ))}
                        </SelectGroup>
                    </SelectContent>
                </Select>
            </div>

            <SGPAForm 
                semester={semester}
                branch={branch}
            />

            <div className="border rounded-md">
                <GradingTable />
            </div>

            <div>
                <SGPAFormula />
            </div>
        </div>
    );
}

export default Home;
