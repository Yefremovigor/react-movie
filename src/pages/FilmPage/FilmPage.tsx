

import {useContext} from 'react';

import {useParams} from 'react-router-dom';

import AddButton from '../../components/AddButton/AddButton.tsx';
import P from '../../components/P/P.tsx';
import Rating from '../../components/Rating/Rating.tsx';
import {UserContext} from '../../context/user.context.tsx';

import styles from './FilmPage.module.css';

const FilmPage = () => {

    const {id} = useParams();
    const { films, setFilms} = useContext(UserContext);
    const film = films.filter(film => film.id === Number(id))[0];

    const addToFavorite = (id: number) => {
        setFilms(films.map(film => film.id === id ? { ...film, ifFavorite: !film.ifFavorite } : film));
    };


    return (
        <div className={styles['film-page__wrapper']}>
            <div className={styles['film-page__header']}>
                <span className={styles['film-page__subtitle']}>Поиск фильмов</span>
                <h1 className={styles['film-page__title']}>{film.name}</h1>
            </div>
            <div className={styles['film-page__content']}>
                <img className={styles['film-page__img']} src={film.img} alt={`Постер фильма ${film.name}.`} />
                <div className={styles['film-page__description']}>
                    <P type="large">
                        After the devastating events of Avengers: Infinity War, the universe is in ruins due to the
                        efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble
                        once more in order to undo Thanos' actions and restore order to the universe once and for all,
                        no matter what consequences may be in store.
                    </P>
                    <div className={styles['film-page__rating']}>
                        <Rating rating={film.rating}/> <AddButton isAdded={film.ifFavorite} id={film.id} handler={addToFavorite} />
                    </div>
                    <div className={styles['film-page__info']}>
                        <span className={styles['film-page__info-label']}>Тип</span>
                        <P type="large" className={styles['film-page__info-description']}>Movie</P>
                    </div>
                    <div className={styles['film-page__info']}>
                        <span className={styles['film-page__info-label']}>Дата выхода</span>
                        <P type="large" className={styles['film-page__info-description']}>2019-04-24</P>
                    </div>
                    <div className={styles['film-page__info']}>
                        <span className={styles['film-page__info-label']}>Длительность</span>
                        <P type="large" className={styles['film-page__info-description']}>181 мин</P>
                    </div>
                    <div className={styles['film-page__info']}>
                        <span className={styles['film-page__info-label']}>Жанр</span>
                        <P type="large" className={styles['film-page__info-description']}>Adventure, Science Fiction, Action</P>
                    </div>


                </div>
            </div>
            <div className={styles['film-page__reviews']}>
                <span className={styles['film-page__reviews-title']}>Отзывы</span>
                <ul className={styles['film-page__reviews-list']}>
                    <li className={styles['film-page__review']}>
                        <div className={styles['film-page__review-header']}>
                            <span className={styles['film-page__review-title']}>Not as good as infinity war..</span>
                            <span className={styles['film-page__review-date']}>2019-04-29</span>
                        </div>
                        <P type='large'>
                            But its a pretty good film. A bit of a mess in some parts, lacking the cohesive and
                            effortless feel infinity war somehow managed to accomplish. Some silly plot holes and
                            characters that could&apos;ve been cut (Ahem, captain marvel and thanos). The use of Captain
                            marvel in this film was just ridiculous. Shes there at the start, bails for some reason? And
                            then pops up at the end to serve no purpose but deux ex machina a space ship...
                        </P>
                    </li>
                </ul>
            </div>
        </div>
    );
};
export default FilmPage;