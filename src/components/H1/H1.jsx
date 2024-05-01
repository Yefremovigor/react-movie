import styles from './H1.module.css';

function H1({children}) {

    return (
        <h1 className={styles.h1}>{children}</h1>
    );
}

export default H1;