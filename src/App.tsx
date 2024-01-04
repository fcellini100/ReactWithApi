import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from './components/Home';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Home />
    </QueryClientProvider>
  );
};

export default App;
