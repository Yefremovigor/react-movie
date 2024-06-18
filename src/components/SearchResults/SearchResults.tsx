import { FilmList } from '../FilmList';
import { SearchMessage } from '../SearchMessage';

import { SearchResultsProps } from './';

import { useSearchResults } from '@/hooks';


const SearchResults = ({query}: SearchResultsProps) => {
    const [films, loading, error] = useSearchResults(query);

    return (
        <>
            {loading && <SearchMessage title={'Загрузка...'} />}
            {error && <SearchMessage title={'Возникла ошибка'} text={error} />}
            {!loading && !error && !films.length && <SearchMessage title={'Упс... Ничего не найдено'}
                text={'Попробуйте изменить запрос или ввести более точное название фильма'} />}
            {!loading && films && <FilmList films={films} />}
        </>
    );
};

export default SearchResults;