import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopTabs from './tabs.jsx';
import LoginStatus from './loginstatus.jsx';

import Login from './login.jsx';
import CreateUser from './createuser';
import moai from '../../dist/favicon.ico'

const App = () => {
  const view = useSelector((state) => state.view.value)
  const isLoggedIn = useSelector((state) => state.login.value)
  if (view === 'login') {
    return (
      <div>
        <h1>Moai<img src={moai}/></h1>
        <LoginStatus/>
        <Login/>
      </div>
    )
  } else if (view === 'createuser') {
    return (
      <div>
        <h1>Moai<img src={moai}/></h1>
      <LoginStatus/>
      <CreateUser/>
    </div>
    )
  } else if (view === 'splash') {
    return (
      <div>
        <h1>Moai<img src={moai}/></h1>
        <LoginStatus/>
        {isLoggedIn && <TopTabs />}
      </div>
    )
  }
}

export default App;
