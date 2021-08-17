// react
import React from 'react';

// redux
import { useSelector } from 'react-redux';

// component
import Home from './Home/Home';
import Search from './Search/Search';

// css
import styles from './Content.module.css';


const Content = ({ name }) => {

  const MenuOpenClose = useSelector(state => state.MenuOpenClose);

  return(
    <div className={MenuOpenClose.open ? `${styles.content} ${styles.open}` : styles.content}>
      
      {name === 'home' && <Home />}
      {name === 'search' && <Search />}
      
    </div>
  )
    
}

export default Content;