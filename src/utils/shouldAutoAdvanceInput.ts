// Function: Determines if the input should auto-advance based on its value
export const shouldAutoAdvanceInput = (value: string): boolean => {
    const num = Number(value);

    // If not a number, do not auto-advance
    if (Number.isNaN(num)) return false;

    // Auto-advance if two digits are entered and it's not '10', or if '100' is entered
    return (value.length == 2 && num !== 10 && num > 0) || num === 100;
}
