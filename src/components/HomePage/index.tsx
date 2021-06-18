import React from 'react';
import Slider from '../Slider';
import style from './style.scss';

const HomePage = () => {
    const slyderItems = [
        {
            title: 'Специальное предложение для новых клиентов',
            bg: 'https://static-sl.insales.ru/r/kmLQiSMGvT0/fit/1408/0/ce/1/plain/files/1/7312/15973520/original/Фото-2.jpg',
            link: ''
        },
        {
            title: 'Новая коллекция',
            bg: 'https://static-sl.insales.ru/r/wgxG3_2vTNo/fit/1408/0/ce/1/plain/files/1/5229/15996013/original/curology-6CJg-fOTYs4-unsplash_37dbb940f31a5bbf163bc84abe25565f.jpg',
            link: './new/'
        },
        {
            title: 'Бестселлеры',
            bg: 'https://static-sl.insales.ru/r/Hmuc_HQaEHY/fit/500/500/ce/1/plain/images/collections/1/3123/77573171/Садовая_мебель.jpg',
            link: ''
        },
    ]
    return (
        <section className={style.home}>
            <div className={style.home__slider}>
                <Slider items={slyderItems} />
            </div>
            <div className={style.home__slider__link}>
                decor
            </div>
            <div className={style.home__slider__link}>
                plants
            </div>
        </section>
    )
}

export default HomePage