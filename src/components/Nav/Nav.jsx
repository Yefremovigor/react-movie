import styles from './Nav.module.css';

const Nav = () => {
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li>
                        <a className={styles.nav__link} href="/serch">Поиск фильмов</a>
                    </li>
                    <li>
                        <a className={styles.nav__link} href="/my">Мои фильмы <span className={styles.nav__counter}>2</span></a>
                    </li>
                    <li>
                        <a className={styles.nav__link} href="/login">
                            Войти
                            <img src="./images/icons/enter-icon.svg" alt="Иконка входа" />
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default Nav;