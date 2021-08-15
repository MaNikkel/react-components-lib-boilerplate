import React from 'react';
import { render, screen } from '@testing-library/react';

import Button from '.';

describe('Test Component', () => {
  it('Should render correctly', () => {
    const { container } = render(<Button>Dummy</Button>);

    expect(container).toBeInTheDocument();
  });
});
