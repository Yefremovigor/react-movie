import FilmCard from '../FilmCard/FilmCard.tsx';
import { FilmListProps } from './FilmList.props.ts';
import P from '../P/P.jsx';
import styles from'./FilmList.module.css';
const FilmList = ({films, handler} : FilmListProps) => {
    if (films.length === 0) {
        return <P type="large">Ничего не найдено</P>;
    }

    const filmsToRender = films.map(film => {
        return(
            <li className={styles['film-list__item']} key={film.id}>
                <FilmCard film={film} addToFavoriteHandler={handler} />
            </li>
        );
    });

    return (
        <ul className={styles['film-list']}>
            {filmsToRender}
        </ul>
    );
};

export default FilmList;