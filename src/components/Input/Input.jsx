import './Input.css';

const Input = ({type, label, placeholder, icon}) => {
    const inputType = type || 'text';
    const inputClass = `input input--${inputType}`;
    const labelTextClass = label.hidden ? 'input__label-text visually-hidden' : 'input__label-text';
    const labelText = label.text || '';
    const inputPlaceholder = placeholder || '';

    const inputIcon = icon ? <img className="input__icon" src={icon} alt="Иконка" aria-hidden="true" /> : '';

    return (
        <label className="input__label">
            {inputIcon}
            <input className={inputClass} type={type} placeholder={inputPlaceholder} />
            <span className={labelTextClass}>{labelText}</span>
        </label>
    );
}

export default Input;