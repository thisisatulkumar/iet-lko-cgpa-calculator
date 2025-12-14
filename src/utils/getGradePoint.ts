import { MARKS_TO_GRADE } from "@/core/constants/grading"

export const getGradePoint = (marks: number): number => {
    const grade = MARKS_TO_GRADE.find(obj => marks >= obj.min && marks <= obj.max);

    return grade ? grade.point : 0;
}
