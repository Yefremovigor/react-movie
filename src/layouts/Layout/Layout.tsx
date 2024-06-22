import { Outlet } from 'react-router-dom';

import { Main } from '../Main';
import { NavBar } from '../NavBar';

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