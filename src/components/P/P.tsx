import cn from 'classnames';

import { PProps } from './P.props.ts';

import styles from './P.module.css';

function P({children, type = 'regular', className, ...props}: PProps) {

    return (
        <p className={cn(styles.p, styles[`p--${type}`], className)} {...props}>
            {children}
        </p>
    );
}

export default P;