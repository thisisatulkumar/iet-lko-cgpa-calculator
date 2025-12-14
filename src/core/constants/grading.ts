export const MARKS_TO_GRADE = [
    { min: 90, max: 100, grade: "O", label: "Outstanding", point: 10 },
    { min: 80, max: 89, grade: "A+", label: "Excellent", point: 9 },
    { min: 75, max: 79, grade: "A", label: "Very Good", point: 8.5 },
    { min: 70, max: 74, grade: "B+", label: "Good", point: 8 },
    { min: 60, max: 69, grade: "B", label: "Above Average", point: 7 },
    { min: 50, max: 59, grade: "C", label: "Average", point: 6 },
    { min: 40, max: 49, grade: "P", label: "Pass", point: 4 },
    { min: 0, max: 39, grade: "F", label: "Fail", point: 0 },
] as const;
