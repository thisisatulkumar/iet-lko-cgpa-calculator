import { SEMESTERS } from "@/core/constants/semesters";

export type Semester = typeof SEMESTERS[keyof typeof SEMESTERS]['value'];
