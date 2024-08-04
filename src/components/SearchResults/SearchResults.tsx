import { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';

import { FilmList } from '../FilmList';
import { SearchMessage } from '../SearchMessage';

import { SearchResultsProps } from './';

import { IFilm } from '@/interface';
import { AppDispatch, RootState, searchFilms } from '@/store';
import { selectFilmsWithFavoriteStatus } from '@/store/selectors.ts';


const SearchResults = ({query}: SearchResultsProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const {isLoading, isError} = useSelector((state: RootState) => state.films);
    const films: IFilm[] = useSelector(selectFilmsWithFavoriteStatus);

    useEffect(() => {
        dispatch(searchFilms(query));
    }, [query, dispatch]);

    return (
        <>
            {isLoading && <SearchMessage title={'Загрузка...'} />}
            {isError && <SearchMessage title={'Возникла ошибка'} text={isError} />}
            {!isLoading && !isError && !films.length && <SearchMessage title={'Упс... Ничего не найдено'}
                text={'Попробуйте изменить запрос или ввести более точное название фильма'} />}
            {!isLoading && films && <FilmList films={films} />}
        </>
    );
};

export default SearchResults;