import React from 'react';
import style from './style.scss';

const ItemPage = (product: any) => {
    
    const sale = Math.round(100 - Math.floor(parseFloat(product.variants[0].price)) / ((Math.floor(parseFloat(product.variants[0].old_price)) / 100)))

    return (
        <section className={style.item}>
            <div className={style.item__nav}>
                    Home / 
            </div>
            <div className={style.item__box}>
                <div 
                    className={style.item__box__img}
                    style={{backgroundImage: `url(${product.first_image.medium_url})`}}
                >
                    {product.variants[0].old_price &&
                        <p className={style.item__box__sale}>
                            -{sale}%
                        </p>
                    }
                </div>
                <p className={style.item__box__title}>
                    {/* {product.title} */}
                </p>
                {/* {product.variants[0].old_price ? 
                    <p className={style.catalog__list__item__oldprice}>
                        {Math.floor(parseFloat(product.variants[0].old_price))} ₽
                    </p> : 
                    <p className={style.catalog__list__item__oldprice}><br /></p>
                } */}
                <p className={style.item__box__price}>
                    {/* {Math.floor(parseFloat(product.variants[0].price))} ₽ */}
                </p>
            </div>
        </section>
    )
}

export default ItemPage;
