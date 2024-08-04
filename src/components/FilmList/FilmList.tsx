

import { useDispatch } from 'react-redux';

import { FilmCard } from '../FilmCard';

import { FilmListProps } from './';

import { AppDispatch, usersActions } from '@/store';

import styles from './FilmList.module.css';

const FilmList = ({films}: FilmListProps) => {
    const dispatch = useDispatch<AppDispatch>();

    const addToFavoriteHandler = (id: string) => {
        dispatch(usersActions.toggleFavorite(id));
    };

    return (
        <ul className={styles['film-list']}>
            {films.map(film => (
                <li className={styles['film-list__item']} key={film.id}>
                    <FilmCard film={film} addToFavoriteHandler={addToFavoriteHandler} />
                </li>
            ))}
        </ul>
    );
};

export default FilmList;