import styles from './Button.module.css';
import { forwardRef } from 'react';
const Button = forwardRef(({ children, onClick, ...props }, ref)  => {

    return (
        <button {...props} ref={ref} className={styles.button} onClick={onClick}>{children}</button>
    );
});

export default Button;
