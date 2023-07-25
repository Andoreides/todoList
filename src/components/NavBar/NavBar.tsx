import {Link, Redirect, Router} from "react-router-dom";
import {FC} from 'react';
import {LoginForm} from "../LoginForm/LoginForm";
import './NavBar.css';

type auth = {
    isAuth: boolean,
}
const NavBar: FC<auth> = ({isAuth}) => {
    if (!isAuth ) {
        return <Redirect to="/login"  />
    }

    return (
        <nav className='nav'>
            <ul className='nav__list'>
                <li>
                    <Link to="/" className='nav__link' >Список дел</Link>
                </li>

                <li>
                    <Link to="/user" className='nav__link'>Личный кабинет</Link>
                </li>
                {/*<li>*/}
                {/*    <Link to="/login">Логин</Link>*/}
                {/*</li>*/}
                <li>
                    <Link to="/posts" className='nav__link'>Posts</Link>
                </li>
                <li>
                    <Link to="/cars" className='nav__link'>Cars</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;