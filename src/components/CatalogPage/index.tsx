import React, { useEffect, useState } from 'react';
import style from './style.scss';

import braziers from '../../assets/data/braziers.json';
import furniture from '../../assets/data/furniture.json';
import lighting from '../../assets/data/lighting.json';
import linen from '../../assets/data/linen.json';
import plants from '../../assets/data/plants.json';
import storage from '../../assets/data/storage.json';
import tableware from '../../assets/data/tableware.json';

const CatalogPage = () => {
    const [category, setCateghory] = useState(plants);

    const categoriesAll: any = { 
        braziers: braziers,
        furniture: furniture,
        lighting: lighting,
        linen: linen,
        plants: plants,
        storage: storage,
        tableware: tableware
    }

    // const url = new URL(window.location.href);

    const parseParams = (search: any) => {
        if (!search) {
          return {};
        }
        return search
          .replace(/^\?/, '')
          .split('&')
          .map((i: any) => i.split('='))
          .map((i: any) => [i[0], decodeURIComponent(i[1])])
          .reduce((params: any, item: any) => ({
            ...params,
            c: item[1],
          }), {});
    };

    useEffect(() => {
        const url = new URL(window.location.href);

        for (const key in categoriesAll) {
            console.log(key)
            if (key === parseParams(url.href).c) {
                setCateghory(categoriesAll[key])
            }
            
        }
    }, [category])
    console.log(category)

    const dataToRender = (data: any) => {
        
        const { products } = data;
        
        const productsArray = products.map((el: any) => {
            const sale = Math.round(100 - Math.floor(parseFloat(el.variants[0].price)) / ((Math.floor(parseFloat(el.variants[0].old_price)) / 100)))

            return (
                <div className={style.catalog__list__item}>
                    <div 
                        className={style.catalog__list__item__img}
                        style={{backgroundImage: `url(${el.first_image.medium_url})`}}
                    >
                        {el.variants[0].old_price &&
                            <p className={style.catalog__list__item__sale}>
                                -{sale}%
                            </p>
                        }
                    </div>
                    <p className={style.catalog__list__item__title}>
                        {el.title}
                    </p>
                    {el.variants[0].old_price ? 
                        <p className={style.catalog__list__item__oldprice}>
                            {Math.floor(parseFloat(el.variants[0].old_price))} ₽
                        </p> : 
                        <p className={style.catalog__list__item__oldprice}><br /></p>
                    }
                    <p className={style.catalog__list__item__price}>
                        {Math.floor(parseFloat(el.variants[0].price))} ₽
                    </p>
                </div>
            )
        });
        return productsArray
    }
    
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
            { category &&
                <div className={style.catalog__list}>
                    {dataToRender(category)}
                </div>
            }
        </section>
    )
}

export default CatalogPage