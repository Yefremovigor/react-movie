import {MainProps} from './Main.props.ts';
import styles from './Main.module.css';

const Main = ({children}: MainProps) => {
    return (
        <main className={styles.main}>
            {children}
        </main>
    );
};

export default Main;