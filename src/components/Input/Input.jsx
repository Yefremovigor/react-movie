import { forwardRef } from 'react';
import styles from './Input.module.css';

const Input = forwardRef(({type, label, placeholder, icon, name, ...props}, ref) => {
    const inputType = type || 'text';
    const inputClass = `${styles['input']} ${styles[`input--${inputType}`]}`;
    const labelTextClass = label.hidden ? `${styles['input__label-text']} visually-hidden` : styles['input__label-text'];
    const labelText = label.text || '';
    const inputPlaceholder = placeholder || '';

    const inputIcon = icon ? <img className={styles['input__icon']} src={icon} alt="Иконка" aria-hidden="true" /> : '';

    return (
        <label {...props} ref={ref} className={styles['input__label']}>
            {inputIcon}
            <input className={inputClass} type={type} name={name} placeholder={inputPlaceholder} />
            <span className={labelTextClass}>{labelText}</span>
        </label>
    );
});

export default Input;