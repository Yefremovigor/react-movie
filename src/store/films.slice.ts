import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

import { ISearchResponse, PREFIX, SearchResponseConverter } from '@/helpers';
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
    }
});

export default filmsSlice.reducer;
export const filmsActions = filmsSlice.actions;