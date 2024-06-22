import cn from 'classnames';

import { PProps } from './';

import styles from './P.module.css';

export const P = ({children, type = 'regular', className, ...props}: PProps) => {

    return (
        <p className={cn(styles['p'], styles[type], className)} {...props}>
            {children}
        </p>
    );
};

export default P;