import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn, setLoggedOut } from '../features/loginSlice.js';
import { setView } from '../features/viewSlice.js';
import { Input, TextInput, InputWrapper, PasswordInput, Tooltip, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import axios from 'axios';

const Login = (props) => {
  const isLoggedIn = useSelector((state) => state.login.value);
  const dispatch = useDispatch();
  const form = useForm({
    initialValues: {
      userName: '',
      password: ''
    },
    validationRules: {
      password: (value) => value.length >= 8,
      userName: (value) => !value.includes(' '),
    },
  })

  function changeIsLoggedIn(e) {
    e.preventDefault()
    console.log(form.values.userName)
    dispatch(setLoggedIn(form.values.userName))
    dispatch(setView('splash'))
  }

  function submitForm(values) {
    form.validate();
    dispatch(setLoggedIn(form.values.userName))
    dispatch(setView('splash'))
  }

  return (
    <form onSubmit={form.onSubmit(values => submitForm(values))}>
      <TextInput
         id="userName"
         label="Username"
         placeholder="Username"
         required
         error={form.errors.userName && 'Username cannot contain spaces'}
         value={form.values.userName}
         onChange={(event) => form.setFieldValue('userName', event.currentTarget.value)}
       /><br/>

      <PasswordInput
        id="Password"
        placeholder="Password"
        label="Password"
        required
        error={form.errors.password && 'Must be at least 8 characters long'}
        value={form.values.password}
        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}/><br/>

        <Button type="submit">Submit</Button>
    </form>
  )
};

export default Login;