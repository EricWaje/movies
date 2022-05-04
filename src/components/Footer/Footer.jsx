import React from 'react';
import s from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={s.footer}>
            <nav>
                <ul>
                    <li>
                        <a
                            href="https://instagram.com"
                            rel="noopener noreferrer"
                        >
                            Instagram
                        </a>
                    </li>
                    <li>
                        <a href="https://twitter.com">Twitter</a>
                    </li>
                </ul>
            </nav>
        </footer>
    );
};

export default Footer;
