import './P.css';

function P({children, type}) {

    const modifier = type || 'regular';

    return (
        <p className={`p p--${modifier}`}>{children}</p>
    );
}

export default P;