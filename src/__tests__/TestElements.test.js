import { render, cleanup } from "@testing-library/react";
import React from 'react';
import TestElements from '../components/TestElements';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

it('should initialise with 0 counter value', () => {
    const { getByTestId } = render(<TestElements />)

    expect(getByTestId('counter')).toHaveTextContent(0);
});

it('should be enabled', () => {
    const { getByTestId } = render(<TestElements />)

    expect(getByTestId('button-up')).not.toHaveAttribute('disabled');
});

it('should be disabled', () => {
    const { getByTestId } = render(<TestElements />)

    expect(getByTestId('button-down')).toBeDisabled();
});
