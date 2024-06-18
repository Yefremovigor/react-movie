import React, { useContext } from 'react';

import { UserContext } from '@/context';

export const useUserLogin = () => {
    const {user, login} = useContext(UserContext);

    function loginHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userLogin = formData.get('login') as string;

        if (userLogin) {
            login(userLogin);
        }
    }

    return {user, loginHandler};
};