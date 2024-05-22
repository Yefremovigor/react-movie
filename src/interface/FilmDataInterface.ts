import {FilmReviewInterface} from './FilmReviewInterface.ts';

export interface FilmDataInterface {
    id:           string;
    name:         string;
    img:          string;
    rating:       number;
    ifFavorite:   boolean;
    type:         string;
    premiereDate: string;
    duration:     string;
    genre:        string[];
    description:  string;
    review:       FilmReviewInterface;
}