import { Provider } from 'react-redux';

import { MainRouter } from '@/routers';
import { store } from '@/store';

const App = () => {

    return (
        <Provider store={store}>
            <MainRouter />
        </Provider>
    );
};

export default App;