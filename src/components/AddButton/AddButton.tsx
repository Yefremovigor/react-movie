import { MouseEvent } from 'react';

import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';

import { AddButtonProps } from './';

import { AppDispatch, RootState, usersActions } from '@/store';

import styles from './AddButton.module.css';

const AddButton = ({film, className}: AddButtonProps) => {
    const dispatch = useDispatch<AppDispatch>();
    const isFavorite = !!useSelector((s: RootState) => s.users.currentUser?.favoriteFilms.find(f => f.id === film.id));

    const clickHandler = (event: MouseEvent) => {
        event.preventDefault();
        dispatch(usersActions.toggleFavorite(film));
    };

    const buttonText = isFavorite ? 'В избранном' : 'В избранное';
    const buttonIcon = isFavorite ? '/images/icons/favorites-icon.svg' : '/images/icons/like-icon.svg';
    const buttonClass = cn(styles['add-button'], {[styles.added]: isFavorite}, className);

    return (
        <button className={buttonClass} onClick={clickHandler}>
            <img src={buttonIcon} alt={buttonText} /> {buttonText}
        </button>
    );
};

export default AddButton;