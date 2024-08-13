import {IFilmReview} from './';

export interface IFilmData {
    id:           string;
    name:         string;
    img:          string;
    rating:       number;
    isFavorite:   boolean;
    type:         string;
    premiereDate: string;
    duration:     string;
    genre:        string[];
    description:  string;
    review:       IFilmReview;
}