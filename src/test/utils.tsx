import { render } from '@testing-library/react';
import { type ReactNode } from 'react';
import { MantineProvider } from '@mantine/core';
import { Provider } from 'react-redux';
import { setupStore } from '../App/store/store';

const store = setupStore();

export function renderWithRedux(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <Provider store={store}>{children}</Provider>
    ),
    ...options,
  });
}

export function renderWithProviders(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }: { children: ReactNode }) => (
      <Provider store={store}>
        <MantineProvider>{children}</MantineProvider>
      </Provider>
    ),
    ...options,
  });
}
