import { CURRICULUM } from "@/core/constants/subjects";

import type { Semester } from "@/types/semester";
import type { Branch } from "@/types/branch";

// Function: Get subjects based on semester and branch
export const getSubjects = (semester: Semester, branch: Branch) => {
    return CURRICULUM.find(
        item => item.semester === semester && item.branch === branch
    )?.subjects || [];
}
