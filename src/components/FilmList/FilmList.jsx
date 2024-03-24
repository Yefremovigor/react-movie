import styles from'./FilmList.module.css';
import P from "../P/P.jsx";
import FilmCard from "../FilmCard/FilmCard.jsx";
const FilmList = ({films, handler}) => {
    if (films.length === 0) {
        return <P type="warning">Ничего не найдено</P>;
    }

    const filmsToRender = films.map(film => {
        return(
            <li className={styles['film-list__item']} key={film.id}>
                <FilmCard film={film} addToFavoriteHandler={handler} />
            </li>
        );
    })

    return (
        <ul className={styles['film-list']}>
            {filmsToRender}
        </ul>
    );
}

export default FilmList;