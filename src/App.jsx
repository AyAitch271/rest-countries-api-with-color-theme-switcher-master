
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import './App.css'

import { LayoutPage } from './pages/LayoutPage'
import { HomePage } from './pages/HomePage'
import { CountryPage } from './pages/CountryPage'
import { NotFoundPage } from './pages/NotFoundPage'

const BASE_URL = '/rest-countries-api-with-color-theme-switcher-master/'

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
                    path: `/:countryCode`,
                    element: <CountryPage />,
                    errorElement: <NotFoundPage/>
                }
            ]

        },

    ],
    {basename: BASE_URL}
)

    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
        </QueryClientProvider>
    )
}