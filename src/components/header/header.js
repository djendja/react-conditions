import React from 'react';
import './styles.scss';
import Logo from '../../assets/images/astronaut.webp';

export default function Header() {

    return <header className="header">
                    <div className="header-wrapper">
                        <img className="header__logo" src={Logo} alt="astronaut"/>
                        <h1 className="header__title">Djendja's ART Gallery</h1>
                    </div>
                    <nav className="header__nav">
                        <a className="nav__links" href="#product-list">art</a>
                        <a className="nav__links" href="#footer">contact</a>
                    </nav>
            </header>
}