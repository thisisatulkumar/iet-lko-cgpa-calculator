import { useRef } from "react";

export const useSequentialFocus = () => {
    const refs = useRef<(HTMLInputElement | null)[]>([]);

    const focusNext = (currentIndex: number) => {
        refs.current[currentIndex + 1]?.focus();
    }
    
    return { refs, focusNext };
}
