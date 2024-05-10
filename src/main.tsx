import React from 'react';

import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from 'react-router-dom';

import './index.css';
import App from './layouts/App/App.tsx';
import FavouritesPage from './pages/FavouritesPage/FavouritesPage.tsx';
import FilmPage from './pages/FilmPage/FilmPage.tsx';
import LoginPage from './pages/LoginPage/LoginPage.tsx';
import SearchPage from './pages/SearchPage/SearchPage.tsx';

const router = createBrowserRouter([

    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <SearchPage/>
            },
            {
                path: '/login',
                element: <LoginPage/>
            },
            {
                path: '/favourites',
                element: <FavouritesPage/>
            },
            {
                path: 'film/:id',
                element: <FilmPage/>
            }
        ]
    }

]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
