import * as React from 'react'
import {render as rtlRender} from '@testing-library/react'
import { QueryClient, QueryClientProvider } from 'react-query';

function render(ui: any, {theme = 'light', ...options} = {}) {
  const queryClient = new QueryClient();
  const Wrapper = ({children}: {children?: React.ReactNode | undefined}) => (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
  return rtlRender(ui, {wrapper: Wrapper, ...options})
}

export * from '@testing-library/react'
// override React Testing Library's render with our own
export {render}