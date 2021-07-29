// react
import React, { memo } from 'react';
import { Link } from 'react-router-dom';

// redux
import { useDispatch } from 'react-redux';
import { MenuOpenClose } from '../../action';

// imag
import logo from './img/logo.png';

// css
import './Header.css';

const Header = memo(() => {

  const dispatch = useDispatch();
  const menuOpenClose = () => { dispatch(MenuOpenClose()) };

  const Prevent = (event) => {
    event.preventDefault();
  }

  return(
    <header>
      <h1 className='blind'>Youtube Clone Coding Header</h1>

      <div className='buttonBox'>
        <div className='buttonWrap' onClick={menuOpenClose}>
          <button>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      <Link to='/' className='logoWrap'>
        <img src={logo} alt='Youtube' />
      </Link>

      <form>
        <div className='inputWrap'>
          <input type='text' placeholder='검색'/>
          <button className='keyboardButton' onClick={Prevent}><i className='fas fa-keyboard'></i></button>
        </div>
        <button className='searchButton' onClick={Prevent}><i className='fas fa-search'></i></button>
        <button className='voiceButton' onClick={Prevent}><i className='fas fa-microphone'></i></button>
      </form>

      <div className='rightBox'>
        <button className='appButton'><i className="fas fa-th"></i></button>
        <button className='settingButton'><i className="fas fa-ellipsis-v"></i></button>
        <button className='loginButton'><i className="fas fa-user-circle"></i><span>로그인</span></button>
      </div>

    </header>
  )

});

export default Header;