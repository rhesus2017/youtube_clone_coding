// react
import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// page
import Home from './page/Home/Home';
import Search from './page/Search/Search';
import NotFound from './page/NotFound/NotFound';

const App = () => {

  const getStorage = (item) => { return JSON.parse(window.localStorage.getItem(item)) }
  const setStorage = (item, value) => { window.localStorage.setItem(item, JSON.stringify(value)) }

  useEffect(() => {
    if ( getStorage('text') === undefined ) {
      setStorage('text', '');
    }
  }, [])

  return(
    <div className="react_app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} render={() => <Home name='home' />} />
          <Route path="/Search" exact={true} render={() => <Search name='search' />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;