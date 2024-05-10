import {Link} from 'react-router-dom';

import Logo from '../../components/Logo/Logo.jsx';
import Nav from '../../components/Nav/Nav.jsx';

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