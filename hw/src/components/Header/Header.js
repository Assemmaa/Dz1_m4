import React from 'react';
import style from './header.module.css'

const Header = () => {

    const arr = ['MainPage', 'AboutPage', 'Registr']

    return (
        <div>
            <ul className={style.header}>
                {
                    arr.map(i => <li>{i}</li>)
                }
            </ul>
        </div>
    );
};

export default Header;