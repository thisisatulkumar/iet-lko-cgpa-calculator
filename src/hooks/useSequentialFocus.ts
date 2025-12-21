import { useRef } from "react";

export const useSequentialFocus = () => {
    // Array of refs for input elements
    const refs = useRef<(HTMLInputElement | null)[]>([]);

    // Function: Focuses the next input element in the 'refs' array
    const focusNext = (currentIndex: number) => {
        refs.current[currentIndex + 1]?.focus();
    }
    
    return { refs, focusNext };
}
