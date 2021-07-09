import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn, setLoggedOut } from '../features/loginSlice.js';
import { setView } from '../features/viewSlice.js';
import { Input, TextInput, InputWrapper, PasswordInput, Tooltip, Button, LoadingOverlay } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import Axios from 'axios';
const dotenv = require('dotenv').config();

// const URL = `${process.env.SERV_URL}/login`
const URL = `http://localhost:3000/login/`

const Login = (props) => {
  const [ loading, setLoading] = useState(false);
  const [ serverError, setServerError ] = useState(null);
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
    setLoading(true);
    form.validate();
    console.log(values)
    Axios.post(URL, values)
      .then(response => {
        console.log('res: ', response)
        dispatch(setLoggedIn(form.values.userName))
        setLoading(false);
        dispatch(setView('splash'))
      })
      .catch(err => {
        console.log(err)
        setLoading(false);
        setServerError("wrong username or password")
        form.setFieldError('userName', true);
        form.setFieldError('password', true);
      })
  }

  function clearErrors() {
    setServerError(null);
    form.setFieldError('userName', false);
    form.setFieldError('password', false);
  }

  return (
    <form onSubmit={form.onSubmit(values => submitForm(values))}>
      <LoadingOverlay visible={loading} />
      <TextInput
         id="userName"
         label="Username"
         placeholder="Username"
         required
         error={form.errors.userName && (serverError || 'Username cannot contain spaces')}
         value={form.values.userName}
         onChange={(event) => form.setFieldValue('userName', event.currentTarget.value)}
         onFocus={clearErrors}
       /><br/>

      <PasswordInput
        id="Password"
        placeholder="Password"
        label="Password"
        required
        error={form.errors.password && (serverError || 'Must be at least 8 characters long')}
        value={form.values.password}
        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
        onFocus={clearErrors}
      /><br/>

        <Button type="submit">Submit</Button>
    </form>
  )
};

export default Login;