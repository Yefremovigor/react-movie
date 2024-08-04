import { createSlice } from '@reduxjs/toolkit';

import { loadState } from './';

import { IUser } from '@/interface';


export const USERS_KEY = 'users';

interface IUsersInitialState {
    users: IUser[];
    currentUser: IUser | null;
}


const loadedState = loadState<IUser[]>(USERS_KEY) || [];

const initialState: IUsersInitialState = {
    users: loadedState,
    currentUser: loadedState.find(user => user.isAuth) || null
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        login: (state, action) => {
            const user = state.users.find(user => user.name === action.payload);
            if (user) {
                state.currentUser = {...user, isAuth: true};
                state.users = state.users.map(user => user.name === action.payload ? {...user, isAuth: true} : user);
            } else {
                state.currentUser = {
                    id: state.users.reduce((maxId = 0, user) => user.id > maxId ? user.id : maxId, 0) + 1,
                    name: action.payload,
                    isAuth: true,
                    favoriteFilms: []
                };
                state.users = [...state.users, state.currentUser];
            }
        },
        logout: (state) => {
            state.currentUser = null;
            state.users = state.users.map(user => ({...user, isAuth: false}));
        },
        toggleFavorite: (state, action) => {
            if (!state.currentUser) {
                return;
            }

            if (state.currentUser.favoriteFilms.includes(action.payload)) {
                state.currentUser.favoriteFilms = state.currentUser.favoriteFilms.filter(id => id !== action.payload);
            } else {
                state.currentUser.favoriteFilms.push(action.payload);
            }

            state.users = state.users.map(user => user.name === state.currentUser?.name ? state.currentUser : user);
        }
    }
});

export default usersSlice.reducer;
export const usersActions = usersSlice.actions;