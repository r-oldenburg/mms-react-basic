import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router'
import { mainRouter } from './router/mainRouter.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import './index.css'

const client = new QueryClient();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <QueryClientProvider client={client}>
        <RouterProvider router={mainRouter} />
    </QueryClientProvider>
)
