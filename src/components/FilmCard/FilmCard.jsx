import styles from './FilmCard.module.css'
import AddButton from "../AddButton/AddButton.jsx";

const FilmCard = ({ film, addToFavoriteHandler }) => {
    const clickHandler = () => {
        addToFavoriteHandler(film.id);
    }
    return (<div className={styles['film-card']}>
        <img className={styles['film-card__img']} src={film.img} alt={film.name} />
        <div className={styles['film-card__rating']}>
            <img src="./images/icons/star-icon.svg" alt="Рейтинг" aria-hidden="true" />
            <span className={styles['film-card__rating-value']}>{film.rating}</span>
        </div>
        <div className={styles['film-card__bottom']}>
            <span className={styles['film-card__name']}>{film.name}</span>
            <AddButton state={film.ifFavorite} onClick={clickHandler} />
        </div>
    </div>);
}

export default FilmCard;