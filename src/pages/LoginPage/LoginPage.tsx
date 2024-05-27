import React, {useContext, useRef} from 'react';

import { Navigate } from 'react-router-dom';

import Button from '../../components/Button/Button.tsx';
import Form from '../../components/Form/Form.tsx';
import H1 from '../../components/H1/H1.tsx';
import HeadingBlock from '../../components/HeadingBlock/HeadingBlock.tsx';
import Input from '../../components/Input/Input.tsx';
import {UserContext} from '../../context/user.context.tsx';



const LoginPage = () => {
    const {user, login} = useContext(UserContext);

    const loginInputRef = useRef(null);
    const loginButtonRef = useRef(null);
    function loginHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userLogin = formData.get('login') as string;

        if (userLogin) {
            login(userLogin);
        }
    }

    if (user) {
        return <Navigate to="/" replace />;
    }

    return (
        <>
            <HeadingBlock>
                <H1>Вход</H1>

            </HeadingBlock>
            <Form type="login" onSubmit={loginHandler} className="mb-80">
                <Input ref={loginInputRef} name="login" label={{ hidden: true, text: 'Имя' }}
                    placeholder="Ваше имя" key="login" />
                <Button type="submit" ref={loginButtonRef}>Войти в профиль</Button>
            </Form>
        </>
    );
};

export default LoginPage;