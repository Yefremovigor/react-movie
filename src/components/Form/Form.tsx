import cn from 'classnames';
import { FormProps } from './Form.props.ts';
import styles from './Form.module.css';
const Form = ({ children, onSubmit, type, className, ...props}: FormProps) => {
    const formClass = cn(styles.form, {
    [styles[`form--${type}`]] : Boolean(styles[`form--${type}`]),
    className,
    });

    return (
        <form className={formClass} onSubmit={onSubmit} {...props}>
            {children}
        </form>
    );
};

export default Form;