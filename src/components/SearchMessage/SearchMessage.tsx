
import {SearchMessageProps} from './SearchMessage.props.ts';

import styles from './SearchMessage.module.css';
const SearchMessage = ({title = '', text= ''}: SearchMessageProps) => {

    return (
        <div className={styles['search-message']}>
            <p className={styles['search-message__title']}>{title}</p>
            <p className={styles['search-message__text']}>{text}</p>
        </div>
    );
};

export default SearchMessage;