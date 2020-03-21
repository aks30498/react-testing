import { render, cleanup } from "@testing-library/react";
import React from 'react';
import App from './App';

afterEach(cleanup);

it('creates a snapshot', () => {
    const {asFragment} = render(<App />);

    expect(asFragment(<App />)).toMatchSnapshot()
})