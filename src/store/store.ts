import { configureStore } from '@reduxjs/toolkit';

import { saveState, usersSlice, filmsSlice } from '@/store';
import { USERS_KEY } from '@/store/users.slice.ts';


export const store = configureStore({
    reducer: {
        users: usersSlice,
        films: filmsSlice
    }
});

store.subscribe(() => {
    const state = store.getState();
    saveState(USERS_KEY, state.users.users);
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;