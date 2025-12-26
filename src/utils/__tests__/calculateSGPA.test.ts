import { describe, it, expect } from 'vitest'

import { calculateSGPA } from '../calculateSGPA'

import { CURRICULUM } from '@/core/constants/subjects';

describe("calculateSGPA", () => {
    it("gives correct SGPA for a random data", () => {
        const marks = {
            "Maths": 90,
            "Chemistry": 85,
            "ECE": 90,
            "Mechanical": 90,
            "Soft Skills": 91,
            "Chem Lab": 95,
            "ECE Lab": 95,
            "English Lab": 95,
            "Workshop": 95
        }

        expect(Number(calculateSGPA(marks, CURRICULUM[0].subjects))).toBeGreaterThan(9.8);
    });

    it("returns the same SGPA for the same input every time", () => {
        const marks = {
            "Maths": 90,
            "Chemistry": 85,
            "ECE": 90,
            "Mechanical": 90,
            "Soft Skills": 91,
            "Chem Lab": 95,
            "ECE Lab": 95,
            "English Lab": 95,
            "Workshop": 95
        }

        const result1 = calculateSGPA(marks, CURRICULUM[0].subjects);
        const result2 = calculateSGPA(marks, CURRICULUM[0].subjects);

        expect(result1).toBe(result2);
    });

    it("handles missing subjects without crashing", () => {
        const partialMarks = {
            "Maths": 90,
            "Chemistry": 85,
        };

        expect(() => calculateSGPA(partialMarks, CURRICULUM[0].subjects)).not.toThrow();
    });

    it("returns 0 SGPA when all marks are zero", () => {
        const marks = {
            "Maths": 0,
            "Chemistry": 0,
            "ECE": 0,
            "Mechanical": 0,
            "Soft Skills": 0,
            "Chem Lab": 0,
            "ECE Lab": 0,
            "English Lab": 0,
            "Workshop": 0
        }

        expect(Number(calculateSGPA(marks, CURRICULUM[0].subjects))).toBe(0);
    });

    it("never returns SGPA greater than 10", () => {
        const marks = {
            "Maths": 100,
            "Chemistry": 100,
            "ECE": 100,
            "Mechanical": 100,
            "Soft Skills": 100,
            "Chem Lab": 100,
            "ECE Lab": 100,
            "English Lab": 100,
            "Workshop": 100
        }

        const sgpa = Number(calculateSGPA(marks, CURRICULUM[0].subjects));

        expect(sgpa).toBeLessThanOrEqual(10);
    });

    it("handles invalid marks safely", () => {
        const marks = {
            "Maths": -10,
            "Chemistry": 200,
        };

        expect(() => calculateSGPA(marks, CURRICULUM[0].subjects)).not.toThrow();
    });
});
