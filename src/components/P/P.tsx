import { PProps } from './P.props.ts';
import cn from 'classnames';
import styles from './P.module.css';

function P({children, type = 'regular'}: PProps) {

    return (
        <p className={cn(styles.p, styles[`p--${type}`])}>
            {children}
        </p>
    );
}

export default P;