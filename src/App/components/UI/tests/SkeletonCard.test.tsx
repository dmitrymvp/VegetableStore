import { describe, it, expect } from 'vitest';
import { screen } from '@testing-library/react';
import SkeletonCard from '../skeletonCard';
import { renderWithMantine } from '../../../../test/utils';

describe('SkeletonCard', () => {
    it('Должен отображать скелетон и лоадер', () => {
        renderWithMantine(<SkeletonCard/>)

        const skeleton = screen.getByAltText(/skeleton/i)
        const loader = screen.getByAltText(/loader/i)

        expect(skeleton).toBeInTheDocument()
        expect(loader).toBeInTheDocument()
    })
})