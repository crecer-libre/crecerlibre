import './styles.css';
import React from 'react';
import {Link} from 'react-router-dom';

export const Footer = () => {
    return (
        <footer
            className="footer bg-neutral-200 text-center dark:bg-neutral-700 lg:text-left">
            <div className="p-4 text-center text-neutral-700 dark:text-neutral-200">
                © 2023 Desarrollado por
                <Link
                    className="text-neutral-800 dark:text-neutral-400"
                    to="https://www.linkedin.com/in/francisco-uribe-a18691191/"
                > Francisco Uribe</Link>
            </div>
        </footer>
    )
}
