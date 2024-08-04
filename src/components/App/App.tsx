import { useState } from 'react';

import { Provider } from 'react-redux';

import { UserContext } from '@/context';
import { useGetFilms, useUserAuth } from '@/hooks';
import { MainRouter } from '@/routers';
import { store } from '@/store';

const App = () => {
    const {user, login, logout} = useUserAuth();
    const [films, setFilms] = useState(useGetFilms);


    return (
        <Provider store={store}>
            <UserContext.Provider value={{user, login, logout, films, setFilms}}>
                <MainRouter />
            </UserContext.Provider>
        </Provider>
    );
};

export default App;