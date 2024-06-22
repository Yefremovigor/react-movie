import { useContext } from 'react';

import { FilmCard } from '../FilmCard';

import { FilmListProps } from './';

import { UserContext } from '@/context';

import styles from './FilmList.module.css';

const FilmList = ({films}: FilmListProps) => {

    const {setFilms} = useContext(UserContext);
    const addToFavorite = (id: string) => {
        setFilms(films.map(film => film.id === id ? {...film, ifFavorite: !film.ifFavorite} : film));
    };

    return (
        <ul className={styles['film-list']}>
            {films.map(film => (
                <li className={styles['film-list__item']} key={film.id}>
                    <FilmCard film={film} addToFavoriteHandler={addToFavorite} />
                </li>
            ))}
        </ul>
    );
};

export default FilmList;