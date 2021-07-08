import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn, setLoggedOut } from '../features/loginSlice.js';
import { Button } from '@mantine/core';

const LoginStatus = (props) => {
  const isLoggedIn = useSelector((state) => state.login.value);
  const dispatch = useDispatch();
  return (
    isLoggedIn === false ? (
      <div>
          <Button>Log In</Button> &nbsp;
          <Button>Create Account</Button>
      </div>
      ) : (<div>
        Logged in as {isLoggedIn}. &nbsp;
        <Button onClick={()=> dispatch(setLoggedOut())}>Log Out</Button>
      </div>
    )
  )
}

export default LoginStatus;