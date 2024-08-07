import { useEffect, useState } from 'react';

import axios, { AxiosError } from 'axios';

import { IFilmResponse, PREFIX } from '@/helpers';
import { IFilm } from '@/interface';

export const useGetFilmsByIds = (filmIds: string[]): [IFilm[], boolean, string | null] => {
    const [films, setFilms] = useState<IFilm[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchFilmById = async (id: string): Promise<IFilmResponse> => {
            const { data } = await axios.get<IFilmResponse>(`${PREFIX}/?tt=${id}`);
            return data;
        };

        const fetchAllFilms = async () => {
            setLoading(true);
            setError(null);
            try {
                const IFilmResponsePromises = filmIds.map((id) => fetchFilmById(id));
                const filmResponse = await Promise.all(IFilmResponsePromises);
                const films = filmResponse.map(filmRes => {
                    const film = {
                        id: data.short.imdbId
                    };
                    return film;
                });
                setFilms(films);
                console.log(films);
            } catch (error) {
                if (error instanceof AxiosError) {
                    setError(error.message);
                }
            } finally {
                setLoading(false);
            }
        };

        if (filmIds.length) {
            fetchAllFilms();
        }
    }, [filmIds]);

    return [films, loading, error];
};