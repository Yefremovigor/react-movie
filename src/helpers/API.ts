import { FilmDataInterface } from '../interface/FilmDataInterface.ts';
import { Film } from '../interface/FilmInterface.ts';

export const PREFIX = 'https://search.imdbot.workers.dev/';

export interface SearchResponseItem {
    '#TITLE': string;
    '#YEAR': number;
    '#IMDB_ID': string;
    '#RANK': number;
    '#ACTORS': string;
    '#AKA': string;
    '#IMDB_URL': string;
    '#IMDB_IV': string;
    '#IMG_POSTER': string;
    photo_width: number;
    photo_height: number;
}

export interface SearchResponse {
    ok: boolean;
    description: SearchResponseItem[];
}

export interface Rating {
    '@type': string;
    ratingCount?: number;
    bestRating: number;
    worstRating: number;
    ratingValue: number;
}

export interface Author {
    '@type': string;
    name: string;
}

export interface ItemReviewed {
    '@type': string;
    url: string;
}

export interface Review {
    '@type': string;
    itemReviewed: ItemReviewed;
    author: Author;
    dateCreated: Date;
    inLanguage: string;
    name: string;
    reviewBody: string;
    reviewRating: Rating;
}

export interface Short {
    imdbId: string,
    '@context': string;
    '@type': string;
    url: string;
    name: string;
    image: string;
    description: string;
    review: Review;
    aggregateRating: Rating;
    contentRating: string;
    genre: string[];
    datePublished: string;
    keywords: string;
    duration: string;
}

export interface FilmResponse {
    short: Short;
}

export const SearchResponseConvert = (data: SearchResponse): Film[] => {
    if (!data.description) {
        return [];
    }

    return data.description.map(item => {
        return {
            id: item['#IMDB_ID'],
            name: item['#TITLE'],
            img: item['#IMG_POSTER'],
            ifFavorite: false,
            rating: item['#RANK']
        } as Film;
    });
};

export const FilmResponseConvert = (data: FilmResponse): FilmDataInterface => {
    return {
        id: data.short.imdbId,
        name: data.short.name,
        img: data.short.image,
        rating: data.short.aggregateRating.ratingValue,
        ifFavorite: false,
        type: data.short['@type'],
        premiereDate: data.short.datePublished,
        duration: data.short.duration,
        genre: data.short.genre,
        description: data.short.description,
        review: {
            title: data.short.review.name,
            date: data.short.review.dateCreated,
            description: data.short.review.reviewBody
        }
    };
};
