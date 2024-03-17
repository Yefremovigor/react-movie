import './App.css';
import Button from "./components/Button/Button.jsx";
import H1 from "./components/H1/H1.jsx";
import P from "./components/P/P.jsx";
import NavBar from "./layouts/NavBar/NavBar.jsx";
import Input from "./components/Input/Input.jsx";
import Form from "./components/Form/Form.jsx";
import Main from "./layouts/Main/Main.jsx";
import HeadingBlock from "./components/HeadingBlock/HeadingBlock.jsx";
import FilmList from "./components/FilmList/FilmList.jsx";
import {useState} from "react";

function App() {

    const clickHandler = (event) => {
        console.log(event);
    };

    const INITIAL_FILMS_DATA = [
        {
            id: 1,
            name: 'Black Widow',
            img: '/images/film-posters/black-widow.jpg',
            ifFavorite: false,
            rating: 324
        },
        {
            id: 2,
            name: 'Shang Chi',
            img: '/images/film-posters/black-widow.jpg',
            ifFavorite: false,
            rating: 124
        },
        {
            id: 3,
            name: 'Loki',
            img: '/images/film-posters/black-widow.jpg',
            ifFavorite: false,
            rating: 235
        },
        {
            id: 4,
            name: 'How I Met Your Mother',
            img: '/images/film-posters/black-widow.jpg',
            ifFavorite: false,
            rating: 123
        },
        {
            id: 5,
            name: 'Money Heist',
            img: '/images/film-posters/black-widow.jpg',
            ifFavorite: true,
            rating: 8125
        },
        {
            id: 6,
            name: 'Friends',
            img: '/images/film-posters/black-widow.jpg',
            ifFavorite: false,
            rating: 123
        },
        {
            id: 7,
            name: 'The Big Bang Theory',
            img: '/images/film-posters/black-widow.jpg',
            ifFavorite: false,
            rating: 12
        },
        {
            id: 8,
            name: 'Two And a Half Men',
            img: '/images/film-posters/black-widow.jpg',
            ifFavorite: false,
            rating: 456
        }
    ];

    const [films, setFilms] = useState(INITIAL_FILMS_DATA);

    const addToFavorite = (id) => {
        setFilms(films.map(film => film.id === id ? {...film, ifFavorite: !film.ifFavorite} : film));
    };

    return (
        <>
            <NavBar />
            <Main>
                <HeadingBlock>
                    <H1>Поиск</H1>
                    <P>
                        Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.
                    </P>
                </HeadingBlock>
                <Form type="search" className="mb-80">
                    <Input type="search" label={{hidden: true, text: "Поиск"}} placeholder="Введите название"
                           icon="/icon-search.svg" />
                    <Button onClick={clickHandler}>Искать</Button>
                </Form>
                <FilmList films={films} handler={addToFavorite}/>
            </Main>
        </>
    );
}

export default App;
