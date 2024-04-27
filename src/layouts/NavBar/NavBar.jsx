import Logo from '../../components/Logo/Logo.jsx';
import Nav from '../../components/Nav/Nav.jsx';
import styles from './NavBar.module.css';

const NavBar = () => {

    return (
        <section className={styles['nav-bar']}>
            <a className={styles['nav-bar__logo']} href="/">
                <Logo />
            </a>
            <Nav />

        </section>
    );
};

export default NavBar;