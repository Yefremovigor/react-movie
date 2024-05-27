import {  Outlet } from 'react-router-dom';

import Main from '../Main/Main.tsx';
import NavBar from '../NavBar/NavBar.tsx';

const Layout = () => {

    return (
        <>
            <NavBar />
            <Main>
                <Outlet />
            </Main>
        </>
    );
};

export default Layout;