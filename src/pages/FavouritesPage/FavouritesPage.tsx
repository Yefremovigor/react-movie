import { FilmList } from '@components/FilmList';
import { H1 } from '@components/H1';
import { HeadingBlock } from '@components/HeadingBlock';
import { useSelector } from 'react-redux';

import { RootState } from '@/store';


const FavouritesPage = () => {
    const favoriteFilms = useSelector((state: RootState) => state.users.currentUser?.favoriteFilms || []);

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