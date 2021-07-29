// react
import React from 'react';

// component
import Header from '../../component/Header/Header';
import Main from '../../component/Main/Main';
import Footer from '../../component/Footer/Footer';

const Detail = ({ name }) => {

  return(
    <div className={name}>
      <Header />
      <Main name={name} />
      <Footer />
    </div>
  )

}

export default Detail;