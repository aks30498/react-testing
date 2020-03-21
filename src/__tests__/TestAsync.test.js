import { render, cleanup, fireEvent, waitForElement } from "@testing-library/react";
import React from 'react';
import TestAsync from '../components/TestAsync';
import '@testing-library/jest-dom/extend-expect'

afterEach(cleanup);

it('increments after 0.5s', async() => {
    const {getByTestId, getByText} = render(<TestAsync />);

    fireEvent.click(getByTestId('button-up'));

    const counter = await waitForElement(() => getByText('1'));

    expect(counter).toHaveTextContent('1');
})