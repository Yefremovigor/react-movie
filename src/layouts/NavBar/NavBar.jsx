import './NavBar.css';
import Logo from "../../components/Logo/Logo.jsx";
import Nav from "../../components/Nav/Nav.jsx";

const NavBar = () => {

    return (
        <section className="nav-bar">
            <a className='nav-bar__logo-link' href="/">
                <Logo />
            </a>
            <Nav className='nav-bar__nav' />

        </section>
    );
}

export default NavBar;