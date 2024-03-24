import styles from './AddButton.module.css';

const AddButton = ({onClick, state}) => {

    const buttonText = state ? 'В избранном' : 'В избранное';
    const buttonIcon = state ? './images/icons/favorites-icon.svg' : './images/icons/like-icon.svg';
    const buttonClass = state ? `${styles['add-button']} ${styles.added}` : styles['add-button'];

    return (
        <button className={buttonClass} onClick={onClick}>
            <img src={buttonIcon} alt={buttonText} /> {buttonText}
        </button>
    );
}

export default AddButton;