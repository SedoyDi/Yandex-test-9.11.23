import React from 'react';
import './Category.css';

export default function Category({ title, img, route }) {
    return (
        <li className='category'>
            <a href={route} className='category__link' onClick={() => console.log("Работаю")}>
                <h2 className='category__title' > {title}</h2>
                <img src={img} alt={title} className='category__img' />
            </a>
        </li>

    )
}

