import styles from './NavBar.module.css';
import Logo from "../../components/Logo/Logo.jsx";
import Nav from "../../components/Nav/Nav.jsx";

const NavBar = ({userName, logOutHandler}) => {

    return (
        <section className={styles['nav-bar']}>
            <a className={styles['nav-bar__logo']} href="/">
                <Logo />
            </a>
            <Nav userName={userName} logOutHandler={logOutHandler}  />

        </section>
    );
}

export default NavBar;