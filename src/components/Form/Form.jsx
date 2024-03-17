import './Form.css';
const Form = ({ children, onSubmit, type, className}) => {
    const formClass = `form form--${type} ${className || ''}`;

    return (
        <form className={formClass} onSubmit={onSubmit}>
            {children}
        </form>
    );
}

export default Form;