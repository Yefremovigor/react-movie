import cn from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { AppDispatch, RootState, usersActions } from '@/store';

import styles from './Nav.module.css';

const Nav = () => {
    const dispatch = useDispatch<AppDispatch>();
    const user = useSelector((s: RootState) => s.users.currentUser);

    function logoutHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        dispatch(usersActions.logout());
    }

    return (
        <>
            <nav className={styles.nav}>
                <ul className={styles.nav__list}>
                    <li>
                        <NavLink to="/" className={({isActive}) => cn(styles.nav__link, {[styles.active]: isActive})}>
                            Поиск фильмов
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to="/favourites"
                            className={({isActive}) => cn(styles.nav__link, {[styles.active]: isActive})}>
                            Мои фильмы
                            {user && user.favoriteFilms.length > 0 &&
                                <span className={styles.nav__counter}>{user.favoriteFilms.length}</span>
                            }
                        </NavLink>
                    </li>
                    {user ? (
                        <>
                            <li>
                                <NavLink to="/user"
                                    className={({isActive}) => cn(styles.nav__link, {[styles.active]: isActive})}>
                                    {user.name}
                                    <img src="/images/icons/user-icon.svg" alt="Иконка иконка пользователя" />
                                </NavLink>
                            </li>
                            <li>
                                <button className={styles['nav__button']} onClick={logoutHandler}>Выйти</button>
                            </li>
                        </>
                    )
                        : (
                            <li>
                                <NavLink to="/login"
                                    className={({isActive}) => cn(styles.nav__link, {[styles.active]: isActive})}>
                                    Войти
                                    <img src="/images/icons/enter-icon.svg" alt="Иконка входа" />
                                </NavLink>
                            </li>
                        )}

                </ul>
            </nav>
        </>
    );
};

export default Nav;