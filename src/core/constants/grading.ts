export const MARKS_TO_GRADE = [
    { min: 90, max: 100, grade: "O", label: "Outstanding", point: 10 },
    { min: 80, max: 89, grade: "A+", label: "Excellent", point: 9 },
    { min: 70, max: 79, grade: "A", label: "Very Good", point: 8 },
    { min: 60, max: 69, grade: "B+", label: "Good", point: 7 },
    { min: 50, max: 59, grade: "B", label: "Above Average", point: 6 },
    { min: 40, max: 49, grade: "C", label: "Average", point: 5 },
    { min: 30, max: 39, grade: "P", label: "Pass", point: 4 },
    { min: 30, max: 39, grade: "F", label: "Fail", point: 0 },
] as const;
