import React from 'react';
import { Button } from '@mantine/core';

const UserStatus = (props) => {
  return (
    props.isLoggedIn === false ? (
    <div>
        <Button>Log In</Button> &nbsp;

        <Button>Create Account</Button>
      </div>
      ) : (<div>
        Logged in as {props.login}
      </div>
    )
  )
}

export default UserStatus;