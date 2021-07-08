import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import TopTabs from './tabs.jsx';
import LoginStatus from './loginstatus.jsx';

const App = () => {
  // const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  // const [ view, setView ] = useState('login');

  // function LogIn(value) {
  //   setIsLoggedIn(value);
  // }

  // function changeView(e) {
  //   setView(e.target.value)
  // }

  const view = useSelector((state) => state.view.value)
  const isLoggedIn = useSelector((state) => state.login.value)

  return (
    <div>
      <h1>Moai</h1>
      <LoginStatus/>
      <TopTabs />
    </div>
  )
}

export default App;