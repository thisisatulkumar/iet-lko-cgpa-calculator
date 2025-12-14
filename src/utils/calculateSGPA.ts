import { SUBJECTS } from "@/core/constants/subjects";

import { getGradePoint } from "./getGradePoint";

export const calculateSGPA = (marks: Record<string, number>) => {
    let totalCredits = 0;
    let weightedSum = 0;

    for (const subject of SUBJECTS) {
        const subjectMarks = marks[subject.name];

        if (subjectMarks === undefined) continue;

        const gradePoint = getGradePoint(subjectMarks);

        totalCredits += subject.credits;
        weightedSum += subject.credits * gradePoint;
    }

    if (totalCredits === 0) return 0;

    const sgpa = Number(weightedSum / totalCredits).toFixed(2);

    return sgpa;
}
