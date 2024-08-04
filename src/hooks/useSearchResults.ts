import { useState, useEffect } from 'react';

import axios, { AxiosError } from 'axios';
import { useSelector } from 'react-redux';

import { PREFIX, ISearchResponse, SearchResponseConverter } from '@/helpers';
import { IFilm } from '@/interface';
import { RootState } from '@/store';

export const useSearchResults = (query: string): [IFilm[], boolean, string | null] => {
    const [films, setFilms] = useState<IFilm[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchSearchResults = async () => {
            setLoading(true);
            setError(null);
            try {
                const {data} = await axios.get<ISearchResponse>(`${PREFIX}?q=${query}`);
                const films = SearchResponseConverter(data);
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

    return [films, loading, error];
};
