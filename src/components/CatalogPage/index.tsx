import React from 'react';
import style from './style.scss';

const CatalogPage = () => {

    console.log(window.location.search)
    
    return (
        <section className={style.catalog}>
            <div className={style.catalog__nav}>
                <div className={style.catalog__nav__location}>
                    Home / 
                </div>
                <div className={style.catalog__nav__title}>
                    / / / 
                </div>
                <div className={style.catalog__nav__filter}>
                    Filters 
                </div>
            </div>
            <div className={style.catalog__list}>
                <div className={style.catalog__list__item}>
                    <span 
                        className={style.catalog__list__item__img}
                        style={{backgroundImage: `url()`}}
                    >
                        <p className={style.catalog__list__item__sale}>
                            sale
                        </p>
                    </span>
                    <p className={style.catalog__list__item__title}>
                        title
                    </p>
                    <p className={style.catalog__list__item__price}>
                        price
                    </p>
                </div>
            </div>
        </section>
    )
}

export default CatalogPage