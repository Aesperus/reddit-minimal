import React from 'react';
import App from '../App';
import { render, screen } from '@testing-library/react';

describe("App", () => {
    it("renders test heading", () => {
        render(<App />);
    });
});