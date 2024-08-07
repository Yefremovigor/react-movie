


import { FilmCard } from '../FilmCard';

import { FilmListProps } from './';


import styles from './FilmList.module.css';

const FilmList = ({films}: FilmListProps) => {

    return (
        <ul className={styles['film-list']}>
            {films.map(film => (
                <li className={styles['film-list__item']} key={film.id}>
                    <FilmCard film={film} />
                </li>
            ))}
        </ul>
    );
};

export default FilmList;