import { useState, useEffect } from 'react';

import axios, {AxiosError} from 'axios';

import { PREFIX, SearchResponse, SearchResponseConvert } from '../helpers/API';
import { Film } from '../interface/FilmInterface';

export const useSearchResults = (query: string): [Film[], boolean, string | null] => {
    const [films, setFilms] = useState<Film[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true);
            setError(null);
            try {
                const { data } = await axios.get<SearchResponse>(`${PREFIX}?q=${query}`);
                const films = SearchResponseConvert(data);
                setFilms(films);
            } catch (error) {
                if (error instanceof AxiosError) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchSearchResults();
        
    }, [query]);

    return [ films, loading, error ];
};
