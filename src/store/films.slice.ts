import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { IFilmResponse, ISearchResponse, PREFIX, SearchResponseConverter } from '@/helpers';
import { IFilm } from '@/interface';

const initialState: { films: IFilm[]; isLoading: boolean; isError: string | undefined } = {
    films: [],
    isLoading: false,
    isError: undefined
};

export const searchFilms = createAsyncThunk('films/searchFilms', async (query: string) => {
    const {data} = await axios.get<ISearchResponse>(`${PREFIX}?q=${query}`);
    return SearchResponseConverter(data) || [];
});

export const getFavoriteFilmsByIds = createAsyncThunk('films/getFilmsByIds', async (ids: string[]) => {
    const films: IFilm[] = [];
    for (const id of ids) {
        const { data } = await axios.get<IFilmResponse>(`${PREFIX}/?tt=${id}`);
        console.log(data);
        films.push({
            id: data.short.imdbId,
            name: data.short.name,
            img: data.short.image,
            rating: data.short.aggregateRating?.ratingValue || 0,
            isFavorite: true
        });
    }
    return films;
});

const filmsSlice = createSlice({
    name: 'films',
    initialState,
    reducers: {
        setFilms: (state, action) => {
            state.films = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder.addCase(searchFilms.pending, (state) => {
            state.isLoading = true;
        });
        builder.addCase(searchFilms.fulfilled, (state, action) => {
            state.isLoading = false;
            state.films = action.payload as IFilm[];
        });
        builder.addCase(searchFilms.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.error.message;
        });

        builder.addCase(getFavoriteFilmsByIds.fulfilled, (state, action) => {
            state.films = action.payload;
        });

        builder.addCase(getFavoriteFilmsByIds.rejected, (state, action) => {
            state.isError = action.error.message;
        });

        builder.addCase(getFavoriteFilmsByIds.pending, (state) => {
            state.isLoading = true;
        });
    }
});

export default filmsSlice.reducer;
export const filmsActions = filmsSlice.actions;