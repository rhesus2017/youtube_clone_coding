// react
import React from 'react';

// redux
import { useSelector } from 'react-redux';

// component
import Home from './Home/Home'
import Detail from './Detail/Detail';

// css
import './Content.css';

const Content = ({ name }) => {

  const MenuOpenClose = useSelector(state => state.MenuOpenClose);

  return(
    <div className={MenuOpenClose.open ? 'content open' : 'content'}>
      
      {name === 'home' && <Home />}
      {name === 'detail' && <Detail />}
      
    </div>
  )
    
}

export default Content;