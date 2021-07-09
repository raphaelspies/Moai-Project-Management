import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn, setLoggedOut } from '../features/loginSlice.js';
import { setView } from '../features/viewSlice.js';
import { Button } from '@mantine/core';

const LoginStatus = (props) => {
  const view = useSelector((state) => state.view.value)
  const isLoggedIn = useSelector((state) => state.login.value);
  const dispatch = useDispatch();

  function changeViewToLogin(e) {
    e.preventDefault()
    dispatch(setView('login'))
  }

  function changeViewToCreateUser(e) {
    e.preventDefault()
    dispatch(setView('createuser'))
  }



  return (
    isLoggedIn === false ? (
      <div>
          <Button value="login" onClick={changeViewToLogin}>Log In</Button> &nbsp;
          <Button value="createuser" onClick={changeViewToCreateUser}>Create Account</Button>
      </div>
      ) : (<div>
        Logged in as {isLoggedIn}. &nbsp;
        <Button onClick={()=> dispatch(setLoggedOut())}>Log Out</Button>
      </div>
    )
  )
}

export default LoginStatus;