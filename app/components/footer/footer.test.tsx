import { describe, expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import Footer from '.';

describe('Display Footer content', () => {
  it('Renders footer component', () => {
    render(<Footer />);
    const date = new Date().getFullYear();
    const re = new RegExp(`${date}`);
    expect(screen.getByText(re)).toBeInTheDocument();
  });
});
