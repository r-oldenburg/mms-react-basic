import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import { router } from './router/MainRouter.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'

const client = new QueryClient();
ReactDOM.createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={client}>

  <RouterProvider router={router} />
  </QueryClientProvider>

)
