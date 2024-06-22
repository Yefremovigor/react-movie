import { IFilm, IFilmData } from '@/interface';

export const PREFIX = 'https://search.imdbot.workers.dev/';

export interface ISearchResponseItem {
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

export interface ISearchResponse {
    ok: boolean;
    description: ISearchResponseItem[];
}

export interface IRating {
    '@type': string;
    ratingCount?: number;
    bestRating: number;
    worstRating: number;
    ratingValue: number;
}

export interface IAuthor {
    '@type': string;
    name: string;
}

export interface IReviewedItem {
    '@type': string;
    url: string;
}

export interface IReview {
    '@type': string;
    itemReviewed: IReviewedItem;
    author: IAuthor;
    dateCreated: string;
    inLanguage: string;
    name: string;
    reviewBody: string;
    reviewRating: IRating;
}

export interface IShort {
    imdbId: string,
    '@context': string;
    '@type': string;
    url: string;
    name: string;
    image: string;
    description: string;
    review: IReview;
    aggregateRating: IRating;
    contentRating: string;
    genre: string[];
    datePublished: string;
    keywords: string;
    duration: string;
}

export interface IFilmResponse {
    short: IShort;
}

export const SearchResponseConverter = (data: ISearchResponse): IFilm[] => {
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
        } as IFilm;
    });
};

export const FilmResponseConverter = (data: IFilmResponse): IFilmData => {
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
