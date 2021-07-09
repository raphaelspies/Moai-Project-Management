import React from 'react';
import { Input, TextInput, InputWrapper, PasswordInput, MailIcon, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import Axios from 'axios';
const dotenv = require('dotenv').config();

const URL = `http://localhost:3000/users`

const CreateUser = (props) => {
  const form = useForm({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      userName: '',
      password: ''
    },
    validationRules: {
      email: (value) => /^\S+@\S+$/.test(value),
      password: (value) => value.length >= 8,
      username: (value) => !value.includes(' '),
    },
  })

  function submitForm (values) {
    Axios.post(URL, values)
    .then(response => console.log(response))
    .catch(err => console.log(err))
  }

  return (
    <form onSubmit={form.onSubmit(values => submitForm(values))}>

      <TextInput
        id="firstName"
        label="First Name"
        placeholder="First Name"
        required
        value={form.values.firstName}
        onChange={(event) => form.setFieldValue('firstName', event.currentTarget.value)}
      /> <br/>

      <TextInput
        id="lastName"
        label="Last Name"
        placeholder="Last Name"
        required
        value={form.values.lastName}
        onChange={(event) => form.setFieldValue('lastName', event.currentTarget.value)}
      /><br/>


      <TextInput
        id="email"
        label="Email Address"
        placeholder="Email"
        required
        error={form.errors.email && 'Please specify valid email'}
        value={form.values.email}
        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
        // icon={<MailIcon />}
      /><br/>


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
        description="Must be at least 8 characters long"
        error={form.errors.password && 'Must be at least 8 characters long'}
        value={form.values.password}
        onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
        // description="Must include at least one letter, number and special character"
      /><br/>

      <Button type="submit">Submit</Button>
    </form>
  )
}

export default CreateUser;