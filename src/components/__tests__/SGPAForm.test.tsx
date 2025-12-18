import { describe, it, expect } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';

import SGPAForm from '../SGPAForm';

describe("SGPAForm UI", () => {
    it("allows user to calculate SGPA", async () => {
        render(<SGPAForm />);

        fireEvent.change(screen.getByLabelText(/Maths/i), {
            target: { value: "9" },
        });

        fireEvent.click(screen.getByRole("button", { name: /calculate sgpa/i }));

        expect(await screen.findByText(/your sgpa/i)).toBeInTheDocument();
    });
});
