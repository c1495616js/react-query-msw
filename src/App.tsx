import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import User from './User';

if (process.env.NODE_ENV === 'development') {
  const { worker } = require('./mocks/browser');
  worker.start();
 }

 const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools initialIsOpen={true} />
      <div className="App">
        <User />
      </div>
    </QueryClientProvider>
  );
}

export default App;
