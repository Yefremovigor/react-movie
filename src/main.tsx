import React, { lazy, Suspense } from 'react';

import axios from 'axios';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';

import { FilmResponse, FilmResponseConvert, PREFIX } from './helpers/API.ts';
import App from './layouts/App/App.tsx';
import ErrorPage from './pages/ErrorPage/ErrorPage.tsx';
import FilmPage from './pages/FilmPage/FilmPage.tsx';
import './index.css';


const SearchPage = lazy(() => import('./pages/SearchPage/SearchPage.tsx'));
const LoginPage = lazy(() => import('./pages/LoginPage/LoginPage.tsx'));
const FavouritesPage = lazy(() => import('./pages/FavouritesPage/FavouritesPage.tsx'));

const router = createBrowserRouter([

    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '/',
                element: <Suspense fallback={'loading'}><SearchPage /></Suspense>
            },
            {
                path: '/login',
                element: <Suspense fallback={'loading'}><LoginPage /></Suspense>
            },
            {
                path: '/favourites',
                element: <Suspense fallback={'loading'}><FavouritesPage /></Suspense>
            },
            {
                path: 'film/:id',
                element: <FilmPage />,
                errorElement: <ErrorPage />,
                loader: async ({params}) => {
                    const {data} = await axios.get<FilmResponse>(`${PREFIX}/?tt=${params.id}`);
                    const film = FilmResponseConvert(data);
                    return defer({...film});
                }
            }
        ]
    }

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
