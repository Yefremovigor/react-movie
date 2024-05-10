import React, {useContext} from 'react';

import cn from 'classnames';
import {NavLink} from 'react-router-dom';

import {UserContext} from '../../context/user.context.tsx';

import styles from './Nav.module.css';

const Nav = () => {
    const {user, logout, films} = useContext(UserContext);

    const favoriteFilmsCounter = films.filter(film => film.ifFavorite).length;
    function logoutHandler(event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        event.preventDefault();
        logout();
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
                        <NavLink to="/favourites" className={({isActive}) => cn(styles.nav__link, {[styles.active]: isActive})}>
                            Мои фильмы
                            {favoriteFilmsCounter > 0 && <span className={styles.nav__counter}>{favoriteFilmsCounter}</span>}
                        </NavLink>
                    </li>
                    {user ? (
                        <>
                            <li>
                                <NavLink to="/user" className={({isActive}) => cn(styles.nav__link, {[styles.active]: isActive})}>
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
                                <NavLink to="/login" className={({isActive}) => cn(styles.nav__link, {[styles.active]: isActive})}>
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