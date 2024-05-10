import {useContext, useRef} from 'react';

import Button from '../../components/Button/Button.tsx';
import FilmList from '../../components/FilmList/FilmList.tsx';
import Form from '../../components/Form/Form.tsx';
import H1 from '../../components/H1/H1.tsx';
import HeadingBlock from '../../components/HeadingBlock/HeadingBlock.tsx';
import Input from '../../components/Input/Input.tsx';
import P from '../../components/P/P.tsx';
import {UserContext} from '../../context/user.context.tsx';


const SearchPage = () => {
    const { films, setFilms } = useContext(UserContext);

    const searchInputRef = useRef(null);
    const searchButtonRef = useRef(null);

    const addToFavorite = (id: number) => {
        setFilms(films.map(film => film.id === id ? { ...film, ifFavorite: !film.ifFavorite } : film));
    };

    return (
        <>
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
        </>
    );
};

export default SearchPage;