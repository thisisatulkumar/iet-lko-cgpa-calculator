import { describe, it, expect } from "vitest";
import { getGradePoint } from "../getGradePoint";
import { MARKS_TO_GRADE } from "@/core/constants/grading";

describe("getGradePoint", () => {
    it("returns correct grade point for marks inside a valid range", () => {
        const marks = 85;

        const expected = MARKS_TO_GRADE.find(obj => marks >= obj.min && marks <= obj.max)?.point ?? 0;

        expect(getGradePoint(marks)).toBe(expected);
    });

    it("maps every valid marks value to the correct grade point", () => {
        MARKS_TO_GRADE.forEach(({ min, max, point }) => {
            for (let marks = min; marks <= max; marks++) {
                expect(getGradePoint(marks)).toBe(point);
            }
        });
    });

    it("returns 0 for marks that fall into gaps between ranges", () => {
        for (let i = 0; i < MARKS_TO_GRADE.length - 1; i++) {
            const currentMax = MARKS_TO_GRADE[i].max;
            const nextMin = MARKS_TO_GRADE[i + 1].min;

            if (currentMax + 1 < nextMin) {
                expect(getGradePoint(currentMax + 1)).toBe(0);
            }
        }
    });

    it("returns consistent results for the same marks", () => {
        const marks = 72;

        const first = getGradePoint(marks);
        const second = getGradePoint(marks);

        expect(first).toBe(second);
    });


    it("returns 0 for marks outside all defined ranges", () => {
        expect(getGradePoint(-1)).toBe(0);
        expect(getGradePoint(999)).toBe(0);
    });
});
