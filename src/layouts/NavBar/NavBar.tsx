import { Logo } from '@components/Logo';
import { Nav } from '@components/Nav';
import { Link } from 'react-router-dom';

import styles from './NavBar.module.css';

const NavBar = () => {

    return (
        <section className={styles['nav-bar']}>
            <Link className={styles['nav-bar__logo']} to="/">
                <Logo />
            </Link>
            <Nav />
        </section>
    );
};

export default NavBar;