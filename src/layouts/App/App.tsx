import {useState} from 'react';

import {Outlet} from 'react-router-dom';

import {UserContext} from '../../context/user.context.tsx';
import {useGetFilms} from '../../hooks/useGetFilms.hook.ts';
import {useUserAuth} from '../../hooks/useUserAuth.hook.ts';
import Main from '../Main/Main.tsx';
import NavBar from '../NavBar/NavBar.tsx';

const App = () => {
    const { user, login, logout } = useUserAuth();
    const [films, setFilms] = useState(useGetFilms);

    return (
        <UserContext.Provider value={{ user, login, logout, films, setFilms }}>
            <NavBar />
            <Main>
                <Outlet />
            </Main>
        </UserContext.Provider>
    );
};

export default App;