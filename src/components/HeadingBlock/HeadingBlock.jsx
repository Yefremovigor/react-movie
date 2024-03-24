import styles from './HeadingBlock.module.css';

const HeadingBlock = ({children}) => {
  return (
    <div className={styles.headingBlock}>
        {children}
    </div>
  );
}

export default HeadingBlock;