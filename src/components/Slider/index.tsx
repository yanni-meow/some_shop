import React, { useState } from 'react';
import style from './style.scss';

interface Items {
    title: string;
    bg: string;
    link?: string
}
interface SliderProps {
    items: Array<Items>
}

const Slider = (props: SliderProps) => {
    const { items } = props
    const [activeSlide, setActiveSlide] = useState(0)

    const slides = items.map((el, index) => {
        return (
            <a 
                href={el.link}
                key={index} 
                className={style.slider__item}
                style={{ 
                    display: activeSlide === index ? 'flex' : 'none',
                    backgroundImage: `url(${el.bg})`,
                }}
            >
                <div className={style.slider__item__text}>{el.title}</div>
            </a>
        )
    })
    const dots = items.map((el, index) => {
        return (
            <span 
                key={index} 
                className={activeSlide === index ? style.slider__nav__item__active : style.slider__nav__item } 
                onClick={() => setActiveSlide(index)}
            ></span>
        )
    })

    return (
        <div className={style.slider__box}>
            <div className={style.slider}>
                {slides}
            </div>
            <div className={style.slider__nav}>
                {dots}
            </div>
        </div>
    )
}

export default Slider