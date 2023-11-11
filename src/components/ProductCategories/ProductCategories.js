import React from 'react';
import './ProductCategories.css';
import Category from './Category/Category';

import automatic from '../../images/Categories/Automatic.png';
import capsule from '../../images/Categories/Capsule.png';
import carob from '../../images/Categories/Carob.png';
import drip from '../../images/Categories/Drip.png';

export default function ProductCategories() {
    return (
        <section className='categories'>
            <Category title="Автоматические кофемашины" img={automatic} />
            <Category title="Капсульные кофемашины" img={capsule} />
            <Category title="Рожковые кофемашины" img={carob} />
            <Category title="Капельные кофемашины" img={drip} />
        </section>
    )
}
