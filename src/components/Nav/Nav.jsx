import { useContext } from 'react';
import { UserContext } from '../../context/user.context.jsx';
import styles from './Nav.module.css';

const Nav = () => {
    const {user, logoutHandler} = useContext(UserContext);
    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li>
                        <a className={styles.nav__link} href="/serch">Поиск фильмов</a>
                    </li>
                    <li>
                        <a className={styles.nav__link} href="/my">Мои фильмы <span
                            className={styles.nav__counter}>2</span></a>
                    </li>
                    {user ? (
                        <>
                            <li>
                                <a className={styles.nav__link} href="/user">
                                    {user.name}
                                    <img src="./images/icons/user-icon.svg" alt="Иконка иконка пользователя" />
                                </a>
                            </li>
                            <li>
                                <a className={styles.nav__link} href="/logout" onClick={logoutHandler}>Выйти</a>
                            </li>
                        </>
                    )
                        : (
                            <li>
                                <a className={styles.nav__link} href="/login">
                                    Войти
                                    <img src="./images/icons/enter-icon.svg" alt="Иконка входа" />
                                </a>
                            </li>
                        )}

                </ul>
            </nav>
        </>
    );
};

export default Nav;