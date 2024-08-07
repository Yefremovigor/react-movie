import { useContext, useState } from 'react';

import axios, { AxiosError } from 'axios';

import { UserContext } from '@/context';
import { FilmResponseConverter, IFilmResponse, PREFIX } from '@/helpers';

export const useFavoriteFilms = (filmsId: string[]) => {
    const [folms, setFilms] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const getFavoriteFilms = async (id: string) => {
        setLoading(true);
        setError(null);
        try {
            const {data} = await axios.get<IFilmResponse>(`${PREFIX}/?tt=${id}`);
            const films = FilmResponseConverter(data);
            setFilms(films);
        } catch (error) {
            if (error instanceof AxiosError) {
                setError(error.message);
            }
        } finally {
            setLoading(false);
        }
    };
};