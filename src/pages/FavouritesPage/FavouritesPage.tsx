import { FilmList } from '@components/FilmList';
import { H1 } from '@components/H1';
import { HeadingBlock } from '@components/HeadingBlock';

import { useFavoriteFilms } from '@/hooks';

const FavouritesPage = () => {
    const {favoriteFilms} = useFavoriteFilms();
    console.log(favoriteFilms);

    return (
        <>
            <HeadingBlock>
                <H1>Избранное</H1>
            </HeadingBlock>
            <FilmList films={favoriteFilms} />
        </>
    );
};

export default FavouritesPage;