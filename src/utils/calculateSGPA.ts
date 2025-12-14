import { SUBJECTS } from "@/core/constants/subjects";

import { getGradePoint } from "./getGradePoint";

export const calculateSGPA = (marks: Record<string, number>) => {
    let totalCredits = 0;
    let weightedSum = 0;

    for (const subject of SUBJECTS) {
        const subjectMarks = marks[subject.name];

        // Not using (!subjectMarks) as it will fail when marks is equal to zero
        if (subjectMarks === undefined) continue;

        const gradePoint = getGradePoint(subjectMarks);

        totalCredits += subject.credits;
        weightedSum += subject.credits * gradePoint;
    }

    // To avoid DivideByZero error
    if (totalCredits === 0) return 0;

    const sgpa = Number(weightedSum / totalCredits).toFixed(2);

    return sgpa;
}
