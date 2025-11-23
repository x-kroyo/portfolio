import { QueryClient, QueryClientConfig } from "@tanstack/react-query"

const queryClientConfig: QueryClientConfig = {
  defaultOptions: {
    queries: {
      retry: 0,
      refetchOnWindowFocus: false,
    },
    mutations: {
      retry: 0,
    },
  },
};

const queryClient = new QueryClient(queryClientConfig);
export default queryClient;