import { Suspense } from 'react';

import { AddButton } from '@components/AddButton';
import { P } from '@components/P';
import { Rating } from '@components/Rating';
import { useDispatch } from 'react-redux';
import { Await, useLoaderData } from 'react-router-dom';

import { IFilmData } from '@/interface/';
import { AppDispatch, usersActions } from '@/store';

import styles from './FilmPage.module.css';

const FilmPage = () => {

    const filmData = useLoaderData() as IFilmData;

    const dispatch = useDispatch<AppDispatch>();

    const addToFavoriteHandler = (id: string) => {
        dispatch(usersActions.toggleFavorite(id));
    };


    return (
        <Suspense fallback={<>Загрузка...</>}>
            <Await
                resolve={filmData}
            >
                <div className={styles['film-page__wrapper']}>
                    <div className={styles['film-page__header']}>
                        <span className={styles['film-page__subtitle']}>Поиск фильмов</span>
                        <h1 className={styles['film-page__title']}>{filmData.name}</h1>
                    </div>
                    <div className={styles['film-page__content']}>
                        <img className={styles['film-page__img']} src={filmData.img}
                            alt={`Постер фильма ${filmData.name}.`} />
                        <div className={styles['film-page__description']}>
                            <P type="large">
                                {filmData.description}
                            </P>
                            <div className={styles['film-page__rating']}>
                                <Rating rating={filmData.rating} /> <AddButton isAdded={filmData.isFavorite}
                                    id={filmData.id}
                                    handler={addToFavoriteHandler} />
                            </div>
                            <div className={styles['film-page__info']}>
                                <span className={styles['film-page__info-label']}>Тип</span>
                                <P type="large" className={styles['film-page__info-description']}>{filmData.type}</P>
                            </div>
                            <div className={styles['film-page__info']}>
                                <span className={styles['film-page__info-label']}>Дата выхода</span>
                                <P type="large"
                                    className={styles['film-page__info-description']}>{filmData.premiereDate}</P>
                            </div>
                            <div className={styles['film-page__info']}>
                                <span className={styles['film-page__info-label']}>Длительность</span>
                                <P type="large"
                                    className={styles['film-page__info-description']}>{filmData.duration}</P>
                            </div>
                            <div className={styles['film-page__info']}>
                                <span className={styles['film-page__info-label']}>Жанр</span>
                                <P type="large" className={styles['film-page__info-description']}>{filmData.genre}</P>
                            </div>


                        </div>
                    </div>
                    <div className={styles['film-page__reviews']}>
                        <span className={styles['film-page__reviews-title']}>Отзывы</span>
                        <ul className={styles['film-page__reviews-list']}>
                            <li className={styles['film-page__review']}>
                                <div className={styles['film-page__review-header']}>
                                    <span className={styles['film-page__review-title']}>{filmData.review.title}</span>
                                    <span className={styles['film-page__review-date']}>{filmData.review.date}</span>
                                </div>
                                <P type="large">
                                    {filmData.review.description}
                                </P>
                            </li>
                        </ul>
                    </div>
                </div>
            </Await>
        </Suspense>
    );
};
export default FilmPage;