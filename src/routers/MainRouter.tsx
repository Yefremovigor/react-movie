import { lazy, Suspense } from 'react';

import axios from 'axios';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';

import { FilmResponse, FilmResponseConvert, PREFIX } from '../helpers/API.ts';
import RequireAuth from '../helpers/RequireAuth.tsx';
import Layout from '../layouts/Layout/Layout.tsx';
import ErrorPage from '../pages/ErrorPage/ErrorPage.tsx';
import FilmPage from '../pages/FilmPage/FilmPage.tsx';


const SearchPage = lazy(() => import('../pages/SearchPage/SearchPage.tsx'));
const LoginPage = lazy(() => import('../pages/LoginPage/LoginPage.tsx'));
const FavouritesPage = lazy(() => import('../pages/FavouritesPage/FavouritesPage.tsx'));


const MainRouter = () => {
    const router = createBrowserRouter([
        {
            path: '/',
            element: <RequireAuth><Layout /></RequireAuth>,
            children: [
                {
                    path: '/',
                    element: <Suspense fallback={'loading'}><SearchPage /></Suspense>
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
        },
        {
            path: '/login',
            element: <Layout />,
            children: [
                {
                    path: '/login',
                    element: <Suspense fallback={'loading'}><LoginPage /></Suspense>
                }
            ]
        }
    ]);

    return <RouterProvider router={router} />;
};

export default MainRouter;