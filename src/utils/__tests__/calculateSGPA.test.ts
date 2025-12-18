import { describe, it, expect } from 'vitest'
import { calculateSGPA } from '../calculateSGPA'

describe("calculateSGPA", () => {
    it("gives correct SGPA for a random data", () => {
        const marks = {
            "Maths": 90,
            "Physics / Chemistry": 85,
            "EE / ECE": 90,
            "PPS / Mechanical": 90,
            "EVS / Soft Skills": 91,
            "Physics / Chem Lab": 95,
            "EE / ECE Lab": 95,
            "PPS / English Lab": 95,
            "Workshop / Graphics Lab": 95
        }

        expect(Number(calculateSGPA(marks))).toBeGreaterThan(9.8);
    });

    it("returns the same SGPA for the same input every time", () => {
        const marks = {
            "Maths": 80,
            "Physics / Chemistry": 75,
            "EE / ECE": 70,
            "PPS / Mechanical": 85,
            "EVS / Soft Skills": 90,
            "Physics / Chem Lab": 88,
            "EE / ECE Lab": 92,
            "PPS / English Lab": 86,
            "Workshop / Graphics Lab": 90
        };

        const result1 = calculateSGPA(marks);
        const result2 = calculateSGPA(marks);

        expect(result1).toBe(result2);
    });

    it("handles missing subjects without crashing", () => {
        const partialMarks = {
            "Maths": 90,
            "Physics / Chemistry": 85,
        };

        expect(() => calculateSGPA(partialMarks)).not.toThrow();
    });

    it("returns 0 SGPA when all marks are zero", () => {
        const marks = {
            "Maths": 0,
            "Physics / Chemistry": 0,
            "EE / ECE": 0,
            "PPS / Mechanical": 0,
            "EVS / Soft Skills": 0,
            "Physics / Chem Lab": 0,
            "EE / ECE Lab": 0,
            "PPS / English Lab": 0,
            "Workshop / Graphics Lab": 0
        };

        expect(Number(calculateSGPA(marks))).toBe(0);
    });

    it("never returns SGPA greater than 10", () => {
        const marks = {
            "Maths": 100,
            "Physics / Chemistry": 100,
            "EE / ECE": 100,
            "PPS / Mechanical": 100,
            "EVS / Soft Skills": 100,
            "Physics / Chem Lab": 100,
            "EE / ECE Lab": 100,
            "PPS / English Lab": 100,
            "Workshop / Graphics Lab": 100
        };

        const sgpa = Number(calculateSGPA(marks));

        expect(sgpa).toBeLessThanOrEqual(10);
    });

    it("handles invalid marks safely", () => {
        const marks = {
            "Maths": -10,
            "Physics / Chemistry": 200,
        };

        expect(() => calculateSGPA(marks)).not.toThrow();
    });
});
