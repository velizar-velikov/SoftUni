import { render, screen } from '@testing-library/react';
import { userEvent } from '@testing-library/user-event';
import { describe, expect, it } from 'vitest';
import Counter from './Counter.jsx';

describe('Counter Component', () => {
    it('Should have zero as value on initial render', () => {
        render(<Counter />);

        const countElement = screen.getByText('Count: 0');

        expect(countElement).toBeVisible();
    });

    it('Should increment count on increment button click', async () => {
        render(<Counter />);

        await userEvent.click(screen.getByText('Increment'));

        const countElement = screen.getByText('Count: 1');

        expect(countElement).toBeVisible();
    });
});
