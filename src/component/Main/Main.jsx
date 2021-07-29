// react
import React from 'react';

// component
import Menu from './Menu/Menu';
import Content from './Content/Content';

// css
import './Main.css';


const Main = ({ name }) => {

  return(
    <div className="main">
      <main>
        <h1 className="blind">Youtube Clone Coding Main</h1>

        <Menu />
        <Content name={name}/>

      </main>
    </div>
  )
    
}

export default Main;