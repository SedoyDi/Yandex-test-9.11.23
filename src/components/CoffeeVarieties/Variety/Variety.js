import React from 'react';
import './Variety.css';

export default function Variety({ title, route }) {
    return (
        <li className='variety-list'>
            <a href={route} className='variety-link'>
                {title}
            </a>
        </li>
    )
}
