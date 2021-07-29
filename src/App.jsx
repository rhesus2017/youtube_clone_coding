// react
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

// page
import Home from './page/Home/Home';
import Detail from './page/Detail/Detail';
import NotFound from './page/NotFound/NotFound';

// css
import './css/reset.css';
import './css/class.css';

const App = () => {

  return(
    <div className="react_app">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact={true} render={() => <Home name='home' />} />
          <Route path="/Detail" exact={true} render={() => <Detail name='detail' />} />
          <Route component={NotFound} />
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App;