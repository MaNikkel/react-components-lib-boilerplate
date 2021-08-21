import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Test Component', () => {
  it('Should render correctly', () => {
    render(<Button>Dummy</Button>);

    expect(screen.getByRole('button', { name: /dummy/iu })).toBeInTheDocument();
  });
});
