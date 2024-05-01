import { useEffect, useState } from 'react';
import { useLocalStorage } from './useLocalStorage.hook';

export function useUserAuth() {
    const [users, saveUsers] = useLocalStorage('users');
    const [user, setUser] = useState(null);

    useEffect(() => {
        if (!users) {
            return;
        }
        const foundUser = users.find(user => user.isLogined === true);
        setUser(foundUser);
    }, [users]);

    const login = (userLogin) => {
        if (!userLogin) {
            return;
        }

        if (!users) {
            saveUsers([{ name: userLogin, isLogined: true }]);
        } else {
            const currentUser = users.find(user => user.name === userLogin);
            if (currentUser) {
                saveUsers(users.map(user => user.name === currentUser.name ? { ...user, isLogined: true } : user));
            } else {
                saveUsers([...users, { name: userLogin, isLogined: true }]);
            }
        }
    };

    const logout = () => {
        setUser(null);
        if (users) {
            saveUsers(users.map(user => ({ ...user, isLogined: false })));
        }
    };

    return {
        user,
        login,
        logout
    };
}