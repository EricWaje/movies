import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Buscador from '../Buscador/Buscador';
import s from './Header.module.css';

const Header = () => {
    let navigate = useNavigate();

    const token = sessionStorage.getItem('token');

    useEffect(() => {}, [token]);

    const logout = () => {
        navigate('/');
        sessionStorage.clear();
    };

    return (
        <header className={s.header}>
            <nav>
                <h2>Movies</h2>
                <Buscador />
                <ul>
                    {!token && <Link to="/">Home</Link>}

                    <Link to="/listado">Listado</Link>
                    {token && (
                        <button style={{ padding: '5px 8px' }} onClick={logout}>
                            Logout
                        </button>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
