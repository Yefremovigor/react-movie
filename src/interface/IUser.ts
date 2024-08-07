import { IFilm } from '@/interface/IFilm.ts';

export interface IUser {
    id: number;
    isAuth: boolean;
    name: string;
    favoriteFilms: IFilm[];
}