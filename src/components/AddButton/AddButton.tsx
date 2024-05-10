import React from 'react';

import cn from 'classnames';

import {AddButtonProps} from './AddButton.props.ts';

import styles from './AddButton.module.css';

const AddButton = ({state, id, handler}: AddButtonProps) => {

    const clickHandler = (event: React.MouseEvent) => {
        event.preventDefault();
        handler(id);
    };

    const buttonText = state ? 'В избранном' : 'В избранное';
    const buttonIcon = state ? '/images/icons/favorites-icon.svg' : '/images/icons/like-icon.svg';
    const buttonClass = cn(styles['add-button'], { [styles.added]: state });

    return (
        <button className={buttonClass} onClick={clickHandler}>
            <img src={buttonIcon} alt={buttonText} /> {buttonText}
        </button>
    );
};

export default AddButton;