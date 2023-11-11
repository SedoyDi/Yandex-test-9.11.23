import React from 'react';
import './Varieties.css';
import Variety from './Variety/Variety';

export default function Varieties() {
    return (
        <section className='varieties'>
            <ul className='varieties__list'>
                <Variety title="Молотый кофе" route="#" />
                <Variety title="Кофе в зёрнах" route="#" />
                <Variety title="Кофе в капсулах" route="#" />
            </ul>
        </section>
    )
}
