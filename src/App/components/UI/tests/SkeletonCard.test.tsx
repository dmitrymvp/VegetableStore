import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import SkeletonCard from '../SkeletonCard';
import { renderWithProviders } from '../../../../test/utils';

describe('SkeletonCard', () => {
  it('Должен отображать скелетон и лоадер', () => {
    renderWithProviders(<SkeletonCard />);

    const skeleton = screen.getByAltText(/skeleton/i);
    const loader = screen.getByAltText(/loader/i);

    expect(skeleton).toBeInTheDocument();
    expect(loader).toBeInTheDocument();
  });
});
