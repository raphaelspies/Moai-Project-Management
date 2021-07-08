import React from 'react';
import { Input, InputWrapper, PasswordInput, Tooltip, Button } from '@mantine/core';
import axios from 'axios';

const Login = (props) => {
  return (
    <form>
        <InputWrapper
          label="Please enter your username and password:">
        </InputWrapper>
        <Input variant="default" placeholder="Username" /><br/>

        <PasswordInput
          placeholder="Password"
          // label="Password"
          // description="Password must include at least one letter, number and special character"
          required
        /><br/>
        <Button type="submit">Submit</Button>
    </form>
  )
};

export default Login;