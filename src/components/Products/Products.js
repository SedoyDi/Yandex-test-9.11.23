import React from 'react';
import './Products.css';
import Product from './Product/Product';
import productImg from '../../images/Products/Product.png';

export default function Products() {

    const price = 9449;
    const discount = 20;

    return (
        <section className='products'>
            <h2 className='products__title'>Топ-товары</h2>
            <ul className='products__list'>
                <Product
                    link='#'
                    img={productImg}
                    discount={discount}
                    price={price}
                    xsPlus={25}
                    discription='Беспроводные наушники JBL Ultra Blu...'
                />
                <Product
                    link='#'
                    img={productImg}
                    discount={discount}
                    price={price}
                    xsPlus={25}
                    discription='Беспроводные наушники JBL Ultra Blu...'
                />
                <Product
                    link='#'
                    img={productImg}
                    discount={discount}
                    price={price}
                    xsPlus={25}
                    discription='Беспроводные наушники JBL Ultra Blu...'
                />
                <Product
                    link='#'
                    img={productImg}
                    discount={discount}
                    price={price}
                    xsPlus={25}
                    discription='Беспроводные наушники JBL Ultra Blu...'
                />
                <Product
                    link='#'
                    img={productImg}
                    discount={discount}
                    price={price}
                    xsPlus={25}
                    discription='Беспроводные наушники JBL Ultra Blu...'
                />
                <Product
                    link='#'
                    img={productImg}
                    discount={0}
                    price={price}
                    xsPlus={25}
                    discription='Беспроводные наушники JBL Ultra Blu...'
                />
                <Product
                    link='#'
                    img={productImg}
                    discount={0}
                    price={price}
                    xsPlus={0}
                    discription='Беспроводные наушники JBL Ultra Blu...'
                />
            </ul>
            <a href='#' className='products__link'>Посмотреть всё</a>
        </section>
    )
}
