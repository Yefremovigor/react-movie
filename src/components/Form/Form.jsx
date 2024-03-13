import './Form.css';
const Form = ({ children, onSubmit, type}) => {
    const formClass = `form form--${type}`;

    return (
        <form className={formClass} onSubmit={onSubmit}>
            {children}
        </form>
    );
}

export default Form;