import React, { useState, useEffect } from 'react'
import './Product.css'
import favicon from '../../../images/Products/favorite.svg';
import faviconRed from '../../../images/Products/favorite-heart-interface.svg';
import xsPlusImg1440 from '../../../images/Products/Glyph1440.png'
import xsPlusImg375 from '../../../images/Products/Glyph375.png'

export default function Product({ link, img, discount, price, discription, xsPlus }) {
    const [screenResolution, setScreenResolution] = useState(window.innerWidth)



    const [isFavorit, setIsFavorit] = useState(false);

    const heart = isFavorit ? faviconRed : favicon;
    const newPrice = price - (price / 100 * discount);
    const xsPlusImg = screenResolution > 1000
        ? xsPlusImg1440
        : xsPlusImg375

    useEffect(() => {
        window.addEventListener('resize', () => { setScreenResolution(window.innerWidth) });
    }, [screenResolution, xsPlusImg])

    return (
        <li className='product__card'>
            <img
                src={heart}
                className='product__fav-icon'
                onClick={() => setIsFavorit(!isFavorit)}
            />
            <a href={link} className='product__img-link'>
                <img src={img} className='product__img' />
            </a>
            <div className='product__container'>
                <div>
                    {discount
                        ? (xsPlus
                            ? (<div className='product__price-container'>
                                <p className='product__price product__price_color_red'>{newPrice} ₽</p>
                                <div className='product__discont-container'>
                                    <span className='product__discount'>-{discount}%</span>
                                    <p className='product__price product__price_strong product__price_color_grey'>{price} ₽</p>
                                </div>
                                <p className='product__xs-plus'>
                                    <img src={xsPlusImg} className='product__xs-plus-img' />
                                    {xsPlus} баллов
                                </p>
                            </div>
                            )
                            : (<div className='product__price-container'>
                                <p className='product__price product__price_color_red'>{newPrice} ₽</p>
                                <div className='product__discont-container'>
                                    <span className='product__discount'>-{discount}%</span>
                                    <p className='product__price product__price_strong product__price_color_grey'>{price} ₽</p>
                                </div>
                            </div>)
                        )
                        : (xsPlus
                            ? (<div className='product__price-container'>
                                <p className='product__price'>{price} ₽</p>
                                <p className='product__xs-plus'>
                                    <img src={xsPlusImg} className='product__xs-plus-img' />
                                    {xsPlus} баллов
                                </p>
                            </div>) : (
                                <div className='product__price-container'>
                                    <p className='product__price'>{price} ₽</p>
                                </div>
                            )
                        )}
                    <p className='product__discription'>
                        {discription}
                    </p>
                </div>
                <button
                    type='button'
                    className='product__button'
                    onClick={() => console.log("Работаю")}>В корзину</button>
            </div>


        </li >
    )
}
