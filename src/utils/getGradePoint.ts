import { MARKS_TO_GRADE } from "@/core/constants/grading"

// Function: Gets the grade point by checking the range in which the inputted marks lies
export const getGradePoint = (marks: number): number => {
    const grade = MARKS_TO_GRADE.find(obj => marks >= obj.min && marks <= obj.max);

    return grade ? grade.point : 0;
}
