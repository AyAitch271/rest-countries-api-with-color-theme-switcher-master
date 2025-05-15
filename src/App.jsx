
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

import { LayoutPage } from './pages/LayoutPage'
import { HomePage } from './pages/HomePage'
import { CountryPage } from './pages/CountryPage'
import { NotFoundPage } from './pages/NotFoundPage'



export const App = () => {
    const queryClient = new QueryClient()

    const router = createBrowserRouter([
        {
            path: '/',
            element: <LayoutPage />,

            children: [
                {
                    path: '',
                    element: <HomePage />,
                    errorElement: <NotFoundPage/>
                },
                {
                    path: ':countryCode',
                    element: <CountryPage />,
                    errorElement: <NotFoundPage/>
                }
            ]
        },
    ])

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}