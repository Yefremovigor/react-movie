import {Link} from 'react-router-dom';

import AddButton from '../AddButton/AddButton.tsx';
import Rating from '../Rating/Rating.tsx';

import {FilmCardProps} from './FilmCard.props.ts';

import styles from './FilmCard.module.css';

const FilmCard = ({ film, addToFavoriteHandler }: FilmCardProps) => {

    return (
        <Link to={`film/${film.id}`} key={film.id} className={styles['film-card']}>
            <div
                className={styles['film-card__img']}
                style={{ backgroundImage: `url(${film.img})` }}
            ></div>
            <Rating rating={film.rating} className={styles['film-card__rating']} />
            <div className={styles['film-card__bottom']}>
                <span className={styles['film-card__name']}>{film.name}</span>
                <AddButton
                    isAdded={film.ifFavorite}
                    id={film.id}
                    handler={addToFavoriteHandler}
                    className={styles['film-card__add-button']}
                />
            </div>
        </Link>
    );
};

export default FilmCard;