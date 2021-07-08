import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn, setLoggedOut } from '../features/viewSlice.js';
import { Button } from '@mantine/core';

const LoginStatus = (props) => {
  const isLoggedIn = useSelector((state) => state.login.value);

  return (
    isLoggedIn === false ? (
      <div>
        Not Logged In
          {/* <Button>Log In</Button> &nbsp;
          <Button>Create Account</Button> */}
      </div>
      ) : (<div>
        Logged in as {isLoggedIn}
      </div>
    )
  )
}

export default LoginStatus;