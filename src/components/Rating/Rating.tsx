import cn from 'classnames';

import {RatingProps} from './Rating.props.ts';

import styles from './Rating.module.css';

const Rating = ({rating, className, ...props}: RatingProps) => {
    return (
        <div className={cn(styles['rating'], className)} {...props}>
            <img className={styles['rating__image']} src="/images/icons/star-icon.svg" alt="Рейтинг" aria-hidden="true" />
            <span className={styles['rating__value']}>{rating}</span>
        </div>
    );
};

export default Rating;