


import { describe, it, expect, vi, beforeAll } from 'vitest';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import App from './App';




describe('App', () => {
    it('render to app', async () => {
        render(<App/>)
        
        
        // 3. Ждём появления заголовка/товара/чего-то, что точно будет
        const product = screen.getByText(/Cart/i);
        expect(product).toBeInTheDocument();
        screen.debug()
    })
})