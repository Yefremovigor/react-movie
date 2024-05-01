import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef(({ children, onClick, ...props }, ref)  => {

    return (
        <button {...props} ref={ref} className={styles.button} onClick={onClick}>{children}</button>
    );
});

export default Button;
