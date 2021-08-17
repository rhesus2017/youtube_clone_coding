// react
import React, { useState } from 'react';

// redux
import { useSelector } from 'react-redux';

// css
import styles from './Menu.module.css';


const Menu = () => {

  const Menus = [ { name: '홈', icon: 'fas fa-home'}, { name: '탐색', icon: 'fas fa-eye'}, { name: '구독', icon: 'fas fa-star'}, { name: '보관함', icon: 'fas fa-box'}, { name: '시청 기록', icon: 'fas fa-history'} ];
  const [ ActiveMenu, setActiveMenu ] = useState(0);
  const MenuOpenClose = useSelector(state => state.MenuOpenClose);

  return(
    <nav className={MenuOpenClose.open ? `${styles.subNav} ${styles.open}` : styles.subNav}>
      <ul className={styles.ul}>
        {
          Menus.map((Menu, index) => {
            return (
              <li key={index} className={ActiveMenu === index ? `${styles.li} ${styles.active}` : styles.li} onClick={() => setActiveMenu(index)}>
                <p className={styles.p}>
                  <i className={`${Menu.icon} ${styles.svg}`}></i>
                  <span className={styles.span}>{Menu.name}</span>
                </p>
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
    
}

export default Menu;