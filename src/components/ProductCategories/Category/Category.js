import React from 'react';
import './Category.css';

export default function Category({ title, img }) {
    return (
        <div className='category'>
            <h2 className='category__title'>{title}</h2>
            <img src={img} alt={title} className='category__img' />
        </div>
    )
}
