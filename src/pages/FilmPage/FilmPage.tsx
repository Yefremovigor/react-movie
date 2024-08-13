import { Suspense } from 'react';

import { AddButton } from '@components/AddButton';
import { P } from '@components/P';
import { Rating } from '@components/Rating';
import { Await, useLoaderData } from 'react-router-dom';

import { IFilmData } from '@/interface/';

import styles from './FilmPage.module.css';

const convertToMinutes = (duration: string | undefined) => {
    if (!duration) return 0;

    const hoursMatch = duration.match(/(\d+)H/);
    const minutesMatch = duration.match(/(\d+)M/);

    const hours = hoursMatch ? parseInt(hoursMatch[1], 10) : 0;
    const minutes = minutesMatch ? parseInt(minutesMatch[1], 10) : 0;

    return hours * 60 + minutes;
};

const FilmPage = () => {

    const filmData = useLoaderData() as IFilmData;


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
                                <Rating rating={filmData.rating} /> <AddButton film={filmData}/>
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
                                    className={styles['film-page__info-description']}>{convertToMinutes(filmData.duration)} мин</P>
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