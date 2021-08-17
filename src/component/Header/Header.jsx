// react
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';

// redux
import { useDispatch } from 'react-redux';
import { MenuOpenClose } from '../../action';

// img
import logo from './img/logo.png';

// css
import './Header.css';


const Header = () => {

  const history = useHistory();
  const dispatch = useDispatch();
  const menuOpenClose = () => { dispatch(MenuOpenClose()) };
  const [ Text, setText ] = useState('');
  const getStorage = (item) => { return JSON.parse(window.localStorage.getItem(item)) }
  const setStorage = (item, value) => { window.localStorage.setItem(item, JSON.stringify(value)) }

  const onHandlerText = (event) => {
    setText(event.currentTarget.value);
  }
  const submit = (event) => {
    event.preventDefault();

    if ( Text === '' ) {
      alert('검색어를 입력해주세요');
    } else {
      setStorage('text', Text);
      history.push('/Search');
      window.location.reload();
    }
  }

  useEffect(() => {
    setText(getStorage('text'));
  }, [getStorage('text')]); // eslint-disable-line react-hooks/exhaustive-deps

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

      <form onSubmit={submit}>
        <div className='inputWrap'>
          <input type='text' placeholder='검색' value={Text} onChange={onHandlerText} />
          <button className='keyboardButton'><i className='fas fa-keyboard'></i></button>
        </div>
        <button className='searchButton' onClick={submit}><i className='fas fa-search'></i></button>
        <button className='voiceButton'><i className='fas fa-microphone'></i></button>
      </form>

      <div className='rightBox'>
        <button className='appButton'><i className="fas fa-th"></i></button>
        <button className='settingButton'><i className="fas fa-ellipsis-v"></i></button>
        <button className='loginButton'><i className="fas fa-user-circle"></i><span>로그인</span></button>
      </div>

    </header>
  )

};

export default Header;