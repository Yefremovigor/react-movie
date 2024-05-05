import {AddButtonProps} from './AddButton.props.ts';
import cn from 'classnames';
import styles from './AddButton.module.css';

const AddButton = ({state, ...props}: AddButtonProps) => {

    const buttonText = state ? 'В избранном' : 'В избранное';
    const buttonIcon = state ? './images/icons/favorites-icon.svg' : './images/icons/like-icon.svg';
    const buttonClass = cn(styles['add-button'], { [styles.added]: state });

    return (
        <button className={buttonClass} {...props}>
            <img src={buttonIcon} alt={buttonText} /> {buttonText}
        </button>
    );
};

export default AddButton;