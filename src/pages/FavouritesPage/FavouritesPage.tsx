import {useContext } from 'react';

import FilmList from '../../components/FilmList/FilmList.tsx';
import H1 from '../../components/H1/H1.tsx';
import HeadingBlock from '../../components/HeadingBlock/HeadingBlock.tsx';
import {UserContext} from '../../context/user.context.tsx';

const FavouritesPage = () => {
    const { films} = useContext(UserContext);
    const favoriteFilms = films.filter(film => film.ifFavorite);

    
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