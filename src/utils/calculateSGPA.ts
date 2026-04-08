import { getGradePoint } from "@/utils/getGradePoint";

import type { Subject } from "@/types/subject";

export const calculateSGPA = (marks: Record<string, number>, subjects: Subject[]) => {
    let totalCredits = 0;
    let weightedSum = 0;

    for (const subject of subjects) {
        const subjectMarks = marks[subject.name];

        // Not using (!subjectMarks) as it will lead to unwanted behavior when marks is equal to zero
        if (subjectMarks === undefined) continue;

        const gradePoint = getGradePoint(subjectMarks);

        totalCredits += subject.credits;
        weightedSum += subject.credits * gradePoint;
    }

    // To avoid DivideByZero error
    if (totalCredits === 0) return 0;

    // SGPA = Σ(Credit * Grade Points)/Total Credits where 'Credit' is the weight 
    const sgpa = Number(weightedSum / totalCredits).toFixed(2);

    return sgpa;
}
