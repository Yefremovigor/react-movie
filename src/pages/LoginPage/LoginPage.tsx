import { Button } from '@components/Button';
import { Form } from '@components/Form';
import { H1 } from '@components/H1';
import { HeadingBlock } from '@components/HeadingBlock';
import { Input } from '@components/Input';
import { Navigate } from 'react-router-dom';

import { useUserLogin } from '@/hooks';

const LoginPage = () => {
    const {user, loginHandler} = useUserLogin();

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