import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';

export default function QueryProvider({ children }: { children: ReactNode }) {
  const [client] = useState(() => {
    return new QueryClient({
      defaultOptions: {
        queries: {
          staleTime: 1000 * 60 * 3, // 3분
          refetchOnWindowFocus: true,
          retry: 0,
          networkMode: 'offlineFirst',
          refetchOnMount: true,
          gcTime: 1000 * 60 * 10, //10분
        },
        mutations: {
          retry: 0,
        },
      },
    });
  });

  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}
