import styles from './P.module.css';

function P({children, type}) {

    const modifier = type || 'regular';

    return (
        <p className={`${styles.p}  ${styles[`p--${modifier}`]}`}>{children}</p>
    );
}

export default P;