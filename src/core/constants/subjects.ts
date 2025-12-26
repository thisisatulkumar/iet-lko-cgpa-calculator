import { SEMESTERS } from "./semesters";
import { BRANCHES } from "./branches";

import type { Semester } from "@/types/semester";
import type { Branch } from "@/types/branch";
import type { Subject } from "@/types/subject";

// Common subjects for Year 1 - Physics group
const COMMON_SUBJECTS_YEAR1_PHYSICS: Subject[] = [
    { name: "Maths", credits: 4 },
    { name: "Physics", credits: 4 },
    { name: "EE", credits: 3 },
    { name: "PPS", credits: 3 },
    { name: "EVS", credits: 3 },
    { name: "Physics Lab", credits: 1 },
    { name: "EE Lab", credits: 1 },
    { name: "PPS Lab", credits: 1 },
    { name: "Graphics Lab", credits: 2 },
]

// Common subjects for Year 1 - Chemistry group
const COMMON_SUBJECTS_YEAR1_CHEMISTRY: Subject[] = [
    { name: "Maths", credits: 4 },
    { name: "Chemistry", credits: 4 },
    { name: "ECE", credits: 3 },
    { name: "Mechanical", credits: 3 },
    { name: "Soft Skills", credits: 3 },
    { name: "Chem Lab", credits: 1 },
    { name: "ECE Lab", credits: 1 },
    { name: "English Lab", credits: 1 },
    { name: "Workshop", credits: 2 },
]

export const CURRICULUM: {
    semester: Semester;
    branch: Branch;
    subjects: Subject[];
}[] = [
    // Semester 1
    {
        semester: SEMESTERS[1].value,
        branch: BRANCHES.CE.value,
        subjects: COMMON_SUBJECTS_YEAR1_CHEMISTRY
    },
    {
        semester: SEMESTERS[1].value,
        branch: BRANCHES.CHE.value,
        subjects: COMMON_SUBJECTS_YEAR1_CHEMISTRY
    },
    {
        semester: SEMESTERS[1].value,
        branch: BRANCHES.CSE_AI.value,
        subjects: COMMON_SUBJECTS_YEAR1_PHYSICS
    },
    {
        semester: SEMESTERS[1].value,
        branch: BRANCHES.CSE_R.value,
        subjects: COMMON_SUBJECTS_YEAR1_CHEMISTRY
    },
    {
        semester: SEMESTERS[1].value,
        branch: BRANCHES.CSE_SF.value,
        subjects: COMMON_SUBJECTS_YEAR1_CHEMISTRY
    },
    {
        semester: SEMESTERS[1].value,
        branch: BRANCHES.ECE.value,
        subjects: COMMON_SUBJECTS_YEAR1_PHYSICS
    },
    {
        semester: SEMESTERS[1].value,
        branch: BRANCHES.EE.value,
        subjects: COMMON_SUBJECTS_YEAR1_PHYSICS
    },
    {
        semester: SEMESTERS[1].value,
        branch: BRANCHES.ME.value,
        subjects: COMMON_SUBJECTS_YEAR1_PHYSICS
    },

    // Semester 2
    {
        semester: SEMESTERS[2].value,
        branch: BRANCHES.CE.value,
        subjects: COMMON_SUBJECTS_YEAR1_PHYSICS
    },
    {
        semester: SEMESTERS[2].value,
        branch: BRANCHES.CHE.value,
        subjects: COMMON_SUBJECTS_YEAR1_PHYSICS
    },
    {
        semester: SEMESTERS[2].value,
        branch: BRANCHES.CSE_AI.value,
        subjects: COMMON_SUBJECTS_YEAR1_CHEMISTRY
    },
    {
        semester: SEMESTERS[2].value,
        branch: BRANCHES.CSE_R.value,
        subjects: COMMON_SUBJECTS_YEAR1_PHYSICS
    },
    {
        semester: SEMESTERS[2].value,
        branch: BRANCHES.CSE_SF.value,
        subjects: COMMON_SUBJECTS_YEAR1_PHYSICS
    },
    {
        semester: SEMESTERS[2].value,
        branch: BRANCHES.ECE.value,
        subjects: COMMON_SUBJECTS_YEAR1_CHEMISTRY
    },
    {
        semester: SEMESTERS[2].value,
        branch: BRANCHES.EE.value,
        subjects: COMMON_SUBJECTS_YEAR1_CHEMISTRY
    },
    {
        semester: SEMESTERS[2].value,
        branch: BRANCHES.ME.value,
        subjects: COMMON_SUBJECTS_YEAR1_CHEMISTRY
    },

    // Semester 3
    {
        semester: SEMESTERS[3].value,
        branch: BRANCHES.CE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[3].value,
        branch: BRANCHES.CHE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[3].value,
        branch: BRANCHES.CSE_AI.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[3].value,
        branch: BRANCHES.CSE_R.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[3].value,
        branch: BRANCHES.CSE_SF.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[3].value,
        branch: BRANCHES.ECE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[3].value,
        branch: BRANCHES.EE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[3].value,
        branch: BRANCHES.ME.value,
        subjects: [

        ]
    },

    // Semester 4
    {
        semester: SEMESTERS[4].value,
        branch: BRANCHES.CE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[4].value,
        branch: BRANCHES.CHE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[4].value,
        branch: BRANCHES.CSE_AI.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[4].value,
        branch: BRANCHES.CSE_R.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[4].value,
        branch: BRANCHES.CSE_SF.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[4].value,
        branch: BRANCHES.ECE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[4].value,
        branch: BRANCHES.EE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[4].value,
        branch: BRANCHES.ME.value,
        subjects: [

        ]
    },

    // Semester 5
    {
        semester: SEMESTERS[5].value,
        branch: BRANCHES.CE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[5].value,
        branch: BRANCHES.CHE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[5].value,
        branch: BRANCHES.CSE_AI.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[5].value,
        branch: BRANCHES.CSE_R.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[5].value,
        branch: BRANCHES.CSE_SF.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[5].value,
        branch: BRANCHES.ECE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[5].value,
        branch: BRANCHES.EE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[5].value,
        branch: BRANCHES.ME.value,
        subjects: [

        ]
    },

    // Semester 6
    {
        semester: SEMESTERS[6].value,
        branch: BRANCHES.CE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[6].value,
        branch: BRANCHES.CHE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[6].value,
        branch: BRANCHES.CSE_AI.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[6].value,
        branch: BRANCHES.CSE_R.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[6].value,
        branch: BRANCHES.CSE_SF.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[6].value,
        branch: BRANCHES.ECE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[6].value,
        branch: BRANCHES.EE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[6].value,
        branch: BRANCHES.ME.value,
        subjects: [

        ]
    },

    // Semester 7
    {
        semester: SEMESTERS[7].value,
        branch: BRANCHES.CE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[7].value,
        branch: BRANCHES.CHE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[7].value,
        branch: BRANCHES.CSE_AI.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[7].value,
        branch: BRANCHES.CSE_R.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[7].value,
        branch: BRANCHES.CSE_SF.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[7].value,
        branch: BRANCHES.ECE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[7].value,
        branch: BRANCHES.EE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[7].value,
        branch: BRANCHES.ME.value,
        subjects: [

        ]
    },

    // Semester 8
    {
        semester: SEMESTERS[8].value,
        branch: BRANCHES.CE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[8].value,
        branch: BRANCHES.CHE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[8].value,
        branch: BRANCHES.CSE_AI.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[8].value,
        branch: BRANCHES.CSE_R.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[8].value,
        branch: BRANCHES.CSE_SF.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[8].value,
        branch: BRANCHES.ECE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[8].value,
        branch: BRANCHES.EE.value,
        subjects: [

        ]
    },
    {
        semester: SEMESTERS[8].value,
        branch: BRANCHES.ME.value,
        subjects: [

        ]
    },
];
