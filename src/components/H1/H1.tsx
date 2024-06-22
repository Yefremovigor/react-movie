import { H1Props } from './';

import styles from './H1.module.css';

function H1({children}: H1Props) {

    return (
        <h1 className={styles.h1}>{children}</h1>
    );
}

export default H1;