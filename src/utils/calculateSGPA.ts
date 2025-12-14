import { SUBJECTS } from "@/core/constants/subjects";

import { getGradePoint } from "@/utils/getGradePoint";

// Function: Calculates SGPA using the formula SGPA = Σ(Credit * Grade Points)/Total Credits
export const calculateSGPA = (marks: Record<string, number>) => {
    let totalCredits = 0;
    let weightedSum = 0;

    // Iterate through each subject and get the marks in that subject and then the corresponding grade point to further make the required calculations
    for (const subject of SUBJECTS) {
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
