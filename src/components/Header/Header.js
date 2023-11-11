import React from 'react';
import './Header.css';
import image from '../../images/Header/header-img.png';

export default function Header() {
    return (
        <header className='header'>
            <div className='header__container'>
                <div className="header__content">
                    <h1 className='header__title'>Сезон согревающих напитков</h1>
                    <p className='header__discription'>Подборка кофемашин и подходящего кофе</p>
                </div>
                <img src={image} alt='кофеварка' className='header__img' />
            </div>
        </header>
    )
}
