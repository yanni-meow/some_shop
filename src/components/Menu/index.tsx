import { connect } from 'react-redux';
import { rootState } from '../../store/reducers';
// import { NavLink, useHistory } from 'react-router-dom';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './style.scss';

type MenuItem = {
  text: string,
  id : string,
  link?: string
}

const menu : Array<MenuItem> = [
  {
    text: 'CATALOG',
    id: 'catalog',
    link: '/catalog'
  },
  {
    text: 'About us',
    id: 'about',
    link: '/about'
  },
  {
    text: 'Contacts',
    id: 'contacts',
    link: '/contacts'
  },
  {
    text: 'Payment',
    id: 'payment',
    link: '/payment'
  },
  {
    text: 'Delivery',
    id: 'delivery',
    link: '/delivery'
  }
];

const catalog: Object = {
  text: 'Catalog',
  id: 'catalog',
  link: '/catalog',
  subItems: [
    {
      text: 'Garden',
      link: '/garden',
      icon: 'https://static-sl.insales.ru/r/Z3CcEyLr500/fit/500/500/ce/1/plain/images/collections/1/3121/77573169/Фото.jpg',
      list: ['braziers', 'plants', 'care', 'tools'],
    },
    {
      text: 'Garden furniture',
      link: '/furniture',
      icon: 'https://static-sl.insales.ru/r/Hmuc_HQaEHY/fit/500/500/ce/1/plain/images/collections/1/3123/77573171/Садовая_мебель.jpg',
      list: ['swing', 'chairs', 'tables', 'armchairs', 'sofas', 'sun loungers', 'alcoves'],
    },
    {
      text: 'Tableware',
      link: '/tableware',
      icon: 'https://static-sl.insales.ru/r/lzx8CZutYbQ/fit/500/500/ce/1/plain/images/collections/1/2098/80922674/Посуда.jpg',
      list: ['cups', 'plates', 'tea service', 'for cooking']
    },
    {
      text: 'Lighting',
      link: '/lighting',
      icon: 'https://static-sl.insales.ru/r/Fr6w7egHfHk/fit/500/500/ce/1/plain/images/collections/1/2099/80922675/Освещение.jpg',
      list: ['chandeliers', 'floor lamps', 'table lamps', 'light bulbs', 'LED lightening', 'candles'],
    },
    {
      text: 'Bed linen',
      link: '/linen',
      icon: 'https://static-sl.insales.ru/r/3BB92cqnIoE/fit/500/500/ce/1/plain/images/products/1/2540/417933804/Фото.jpg',
      list: ['pillowcases', 'sheets', 'duvet covers'],
    },
    {
      text: 'Decor',
      link: '/decor',
      icon: 'https://static-sl.insales.ru/r/HUxtXdY0M8c/fit/500/500/ce/1/plain/images/collections/1/6087/87644103/minh-pham-MBsReSZ2WNM-unsplash__1_.jpg',
      list: ['home textiles', 'curtains', 'interior', 'kitchen decor', 'bedroom decor', 'nursery decor', 'bathroom decor'],
    },
    {
      text: 'Storage',
      link: '/storage',
      icon: 'https://static-sl.insales.ru/r/jeJBMbSgiT8/fit/500/500/ce/1/plain/images/collections/1/2106/80922682/Хранение.jpg',
      list: ['boxes', 'shelves', 'shelving', 'cabinets'],
    },
  ],
}

const Menu = () => {
  const isopen: any = {}
  menu.forEach((item) => {
    isopen[item.id] = false;
  })
  const [isOpen, setIsOpen] = useState(isopen)

  const renderMenuButtons = (menu : Array<MenuItem>) => {
    const groups: any = [];
    for (const item of menu) {
        groups.push(
          <div className={style.menu__item}>
              <Link to={`${item.link}`}>{item.text}</Link>
          </div>
        )      
    }
    return groups;
  };

  const renderCatalog = (catalog : any) => {
    const btns: any = [];
    for (const btn of catalog.subItems) {
      const list: any = [];
      btn.list.forEach((el: any) => {
        list.push(
          <Link to={`${catalog.link}${btn.link}/${el.replace(/ /g,"_")}`}>{el}</Link>)
      })

        btns.push(
          <div className={style.menu__sublist__item}>
            <span style={{ backgroundImage: `url(${btn.icon})`}}></span>
            <Link to={`${catalog.link}${btn.link}`}>{btn.text}</Link>
            <div className={style.menu__sublist__item__links}>
              {list}
            </div>
          </div>
        );
    }

    return (
      <div className={style.menu__item}>
        <span id={catalog.id} onClick={(e) => setIsOpen({...isOpen, [e.currentTarget.id]: !isOpen[e.currentTarget.id]})}>{catalog.text}</span>
        <div 
          className={style.menu__sublist}
          style={{ height: isOpen[catalog.id] ? 'calc(100vh - 142px)' : '0vh' }}
        >
          {btns}
        </div>
      </div>
    );
  }
  return (
    <nav className={style.menu}>
      {renderCatalog(catalog)}
      {renderMenuButtons(menu)}
    </nav>
  );
};

// export default Menu;

const mapStateToProps = (store: rootState) => {
  const { currCatalog } = store.catalogReducer;
  return {
    currCatalog
  };
};

export default connect(mapStateToProps)(Menu);
