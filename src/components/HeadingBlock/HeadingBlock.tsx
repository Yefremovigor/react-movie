import { HeadingBlockProps } from './';

import styles from './HeadingBlock.module.css';

const HeadingBlock = ({children}: HeadingBlockProps) => {
    return (
        <div className={styles.headingBlock}>
            {children}
        </div>
    );
};

export default HeadingBlock;