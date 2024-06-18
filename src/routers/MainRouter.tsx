import { lazy, Suspense } from 'react';

import { Layout } from '@layouts/Layout';
import { ErrorPage } from '@pages/ErrorPage';
import { FilmPage } from '@pages/FilmPage';
import axios from 'axios';
import { createBrowserRouter, defer, RouterProvider } from 'react-router-dom';

import { FilmResponseConverter, IFilmResponse, PREFIX, RequireAuth } from '@/helpers';

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
                        const {data} = await axios.get<IFilmResponse>(`${PREFIX}/?tt=${params.id}`);
                        const film = FilmResponseConverter(data);
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