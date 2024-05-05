import React, { useRef, useState } from 'react';
import Button from './components/Button/Button.tsx';
import FilmList from './components/FilmList/FilmList.tsx';
import Form from './components/Form/Form.tsx';
import H1 from './components/H1/H1.tsx';
import HeadingBlock from './components/HeadingBlock/HeadingBlock.tsx';
import Input from './components/Input/Input.tsx';
import Main from './layouts/Main/Main.tsx';
import NavBar from './layouts/NavBar/NavBar.tsx';
import P from './components/P/P.tsx';
import { UserContext } from './context/user.context.tsx';
import { useGetFilms } from './hooks/useGetFilms.hook.ts';
import { useUserAuth } from './hooks/useUserAuth.hook';



function App() {

    const [films, setFilms] = useState(useGetFilms);

    const searchInputRef = useRef(null);
    const searchButtonRef = useRef(null);
    const loginInputRef = useRef(null);
    const loginButtonRef = useRef(null);

    const { user, login, logout } = useUserAuth();


    const addToFavorite = (id: number) => {
        setFilms(films.map(film => film.id === id ? { ...film, ifFavorite: !film.ifFavorite } : film));
    };

    function logoutHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        logout();
    }

    function loginHandler(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const userLogin = formData.get('login') as string;

        if (userLogin) {
            login(userLogin);
        }
    }


    return (
        <>
            <UserContext.Provider value={{ user, logoutHandler }}>
                <NavBar />
                <Main>
                    {!user ? <>
                        <HeadingBlock>
                            <H1>Вход</H1>

                        </HeadingBlock>
                        <Form type="login" onSubmit={loginHandler} className="mb-80">
                            <Input ref={loginInputRef} name="login" label={{ hidden: true, text: 'Имя' }}
                                placeholder="Ваше имя" key="login" />
                            <Button type="submit" ref={loginButtonRef}>Войти в профиль</Button>
                        </Form>
                    </> : <>
                        <HeadingBlock>
                            <H1>Поиск</H1>
                            <P>
                                Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
                            </P>
                        </HeadingBlock>
                        <Form type="search" className="mb-80" onSubmit={(event) => event.preventDefault()}>
                            <Input type="search" ref={searchInputRef} label={{ hidden: true, text: 'Поиск' }}
                                name="query"
                                placeholder="Введите название"
                                icon="./images/icons/icon-search.svg"
                                key="search" />
                            <Button type="submit" ref={searchButtonRef}>Искать</Button>
                        </Form>

                        <FilmList films={films} handler={addToFavorite} />
                    </>}
                </Main>
            </UserContext.Provider>
        </>);
}

export default App;
