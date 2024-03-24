import styles from './Form.module.css';
const Form = ({ children, onSubmit, type, className}) => {
    const formClass = `${styles.form} ${styles[`form--${type}`]} ${className || ''}`;

    return (
        <form className={formClass} onSubmit={onSubmit}>
            {children}
        </form>
    );
}

export default Form;