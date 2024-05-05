import { ButtonProps } from './Button.props.ts';
import { forwardRef } from 'react';
import styles from './Button.module.css';

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({ children, ...props }, ref)  => {

    return (
        <button ref={ref} className={styles.button} {...props}>{children}</button>
    );
});

Button.displayName = 'Button';

export default Button;
