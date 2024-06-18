import { useState } from 'react';

import { UserContext } from '@/context';
import { useGetFilms, useUserAuth } from '@/hooks';
import { MainRouter } from '@/routers';

const App = () => {
    const {user, login, logout} = useUserAuth();
    const [films, setFilms] = useState(useGetFilms);

    return (
        <UserContext.Provider value={{user, login, logout, films, setFilms}}>
            <MainRouter />
        </UserContext.Provider>
    );
};

export default App;