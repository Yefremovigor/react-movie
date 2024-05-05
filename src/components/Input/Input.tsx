import {InputProps} from './Input.props.ts';
import cn from 'classnames';
import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef<HTMLInputElement, InputProps>(({type = 'text', label, placeholder, icon, name, ...props}, ref) => {

    const inputClass = cn(styles['input'], {
        [styles[`input--${type}`]]: Boolean(styles[`input--${type}`])
    });
    const labelTextClass = cn(styles['input__label-text'], {['visually-hidden']: label?.hidden});
    const labelText = label?.text || '';
    const inputPlaceholder = placeholder || '';

    const inputIcon = icon ? <img className={styles['input__icon']} src={icon} alt="Иконка" aria-hidden="true" /> : '';

    return (
        <label className={styles['input__label']}>
            {inputIcon}
            <input className={inputClass} type={type} name={name} placeholder={inputPlaceholder} ref={ref} {...props} />
            <span className={labelTextClass}>{labelText}</span>
        </label>
    );
});

Input.displayName = 'Input';
export default Input;