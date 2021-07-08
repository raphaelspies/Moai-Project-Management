import React, { useState } from 'react';
import TopTabs from './tabs.jsx';
import UserStatus from './userstatus.jsx';

const App = () => {
  const [ isLoggedIn, setIsLoggedIn ] = useState(false);
  const [ view, setView ] = useState('login');

  function LogIn(value) {
    setIsLoggedIn(value);
  }

  function changeView(e) {
    setView(e.target.value)
  }

  return (
    <div>
      <h1>Moai</h1>
      <UserStatus LogIn={LogIn} value={'login'} changeView={changeView} isLoggedIn={isLoggedIn}/>
      <TopTabs changeView={changeView}/>
    </div>
  )
}

export default App;