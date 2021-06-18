import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
import Menu from '../Menu';
import { Link } from 'react-router-dom';
import loupe from '../../assets/icons/loupe.png';
import user from '../../assets/icons/user.png';
import cart from '../../assets/icons/cart.png';
import style from './style.scss';

const Layout = ({ children }: any) => {
  // const history = useHistory()
  const [isOpen, setIsOpen] = useState(true)
  let lastScrollTop = 0;

  window.addEventListener("scroll", function(){  
     const st = window.pageYOffset || document.documentElement.scrollTop;  
     if (st > lastScrollTop){
      setIsOpen(false)
     } else {
      setIsOpen(true)
     }
     lastScrollTop = st;
  }, false);


  return (
    <div className={style.layout}>
      <header>
        <div className={style.header} style={{ height: isOpen ? '80px' : '0px'}}>
          <div className={style.header__logo}>
            <Link to="./">some <span>shop</span></Link>
          </div>
          <form className={style.header__search}>
            <input className={style.header__search__input} type="text" name="search" id="search" placeholder='search' />
            <button className={style.header__search__btn} type="submit"><img src={loupe} alt="" /></button>
          </form>
          <div className={style.header__nav}>
            <Link to='./user' className={style.header__nav__item}>
              <img src={user} alt="" />
            </Link>
            <Link to='./cart' className={style.header__nav__item}> 
              <img src={cart} alt="" />
            </Link>
          </div>
        </div>
        <Menu />
      </header>
      {children}
    </div>
  );
};

export default Layout;
