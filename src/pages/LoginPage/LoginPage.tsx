import { Button } from '@components/Button';
import { Form } from '@components/Form';
import { H1 } from '@components/H1';
import { HeadingBlock } from '@components/HeadingBlock';
import { Input } from '@components/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';


import { AppDispatch, RootState, usersActions } from '@/store';

const LoginPage = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((s: RootState) => s.users.currentUser);
    const loginHandler = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userName = formData.get('login') as string;

        if (!userName) {
            return;
        }

        dispatch(usersActions.login(userName));
    };

    if (user) {
        return <Navigate to="/" replace />;
    }

    return (
        <>
            <HeadingBlock>
                <H1>Вход</H1>

            </HeadingBlock>
            <Form type="login" onSubmit={loginHandler} className="mb-80">
                <Input name="login" label={{hidden: true, text: 'Имя'}}
                    placeholder="Ваше имя" key="login" />
                <Button type="submit">Войти в профиль</Button>
            </Form>
        </>
    );
};

export default LoginPage;