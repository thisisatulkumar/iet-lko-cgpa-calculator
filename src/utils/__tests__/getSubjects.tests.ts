import { describe, it, expect } from "vitest";

import { getSubjects } from "@/utils/getSubjects";

import { CURRICULUM } from "@/core/constants/subjects";

import type { Semester } from "@/types/semester";
import type { Branch } from "@/types/branch";

describe("getSubjects", () => {
    it("should return correct subjects for valid semester and branch", () => {
        const semester: Semester = CURRICULUM[0].semester;
        const branch: Branch = CURRICULUM[0].branch;
        const expectedSubjects = CURRICULUM[0].subjects;

        const subjects = getSubjects(semester, branch);

        expect(subjects).toEqual(expectedSubjects);
    });

    it("should return an empty array for invalid semester and branch combination", () => {
        const semester: Semester = CURRICULUM[0].semester;
        const branch: Branch = "INVALID_BRANCH" as Branch;

        const subjects = getSubjects(semester, branch);
        
        expect(subjects).toEqual([]);
    });

    it("should return an empty array for non-existent semester", () => {
        const semester: Semester = "99" as Semester;
        const branch: Branch = CURRICULUM[0].branch;

        const subjects = getSubjects(semester, branch);
        
        expect(subjects).toEqual([]);
    });

    it("should return an empty array if there are no subjects added yet for the given semester and branch", () => {
        const semester: Semester = "3";
        const branch: Branch = "cse-r";

        const subjects = getSubjects(semester, branch);
        
        expect(subjects).toEqual([]);
    });
});
