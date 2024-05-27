import {useState} from 'react';

import {UserContext} from '../../context/user.context.tsx';
import { useGetFilms } from '../../hooks/useGetFilms.hook.ts';
import { useUserAuth } from '../../hooks/useUserAuth.hook.ts';
import MainRouter from '../../routers/MainRouter.tsx';



const App = () => {
    const { user, login, logout } = useUserAuth();
    const [films, setFilms] = useState(useGetFilms);

    return (
        <UserContext.Provider value={{ user, login, logout, films, setFilms }}>
            <MainRouter />
        </UserContext.Provider>
    );
};

export default App;