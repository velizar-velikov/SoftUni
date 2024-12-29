import { expect, it } from 'vitest';
import App from './App.jsx';
import { render, screen } from '@testing-library/react';

it('Should be true', () => {
    expect(true).toBeTruthy();
});

it('Should have heading', () => {
    render(<App />);

    // const heading = document.querySelector('h1');

    // expect(heading).toBeVisible();

    const headingElement = screen.getByText('React Unit Testing with Vitest');

    expect(headingElement).toBeVisible();
});
