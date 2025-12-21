import { describe, expect, it } from 'vitest';

import { shouldAutoAdvanceInput } from '../shouldAutoAdvanceInput';

describe('shouldAutoAdvanceInput', () => {
    it('should return false for non-numeric input', () => {
        ['abc', '', '12a'].forEach(input => {
            expect(shouldAutoAdvanceInput(input)).toBe(false);
        });
    });

    it('should return true for two-digit numbers except 10', () => {
        ['11', '25', '99'].forEach(input => {
            expect(shouldAutoAdvanceInput(input)).toBe(true);
        });
        expect(shouldAutoAdvanceInput('10')).toBe(false);
    });

    it('should return true for 100', () => {
        expect(shouldAutoAdvanceInput('100')).toBe(true);
    });

    it('should return false for single-digit numbers', () => {
        ['5', '0', '9'].forEach(input => {
            expect(shouldAutoAdvanceInput(input)).toBe(false);
        });
    });

    it('should return false for numbers greater than 100', () => {
        ['102', '150', '200'].forEach(input => {
            expect(shouldAutoAdvanceInput(input)).toBe(false);
        });
    });
});
