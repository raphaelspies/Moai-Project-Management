import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setLoggedIn, setLoggedOut } from '../features/loginSlice.js';
import { Textarea, TextInput, Button } from '@mantine/core';
import { useForm } from '@mantine/hooks';
import Axios from 'axios';
import moment from 'moment';
import MessageList from './messagelist.jsx';
moment().format();

const URL = `http://localhost:3000/messages/post`

const MessageCompose = (props) => {
  const loginName = useSelector(state => state.login.value)

  const form = useForm({
    initialValues: {
      Sender: loginName,
      Subject: 'Greetings from the New World!',
      Project: 'Build Chesapeake',
      Trade: 'Tobacco Cropper',
      Text: 'I made friends with the locals. Great things to follow?',
      Date: moment()
    },
  })

  const postMessage = function(formData) {
    return Axios.post(URL, formData)
    .then(response => {
      console.log('post: ', response.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

  return (
    <form onSubmit={form.onSubmit(values => postMessage(values))}>
      <TextInput
        id="Subject"
        label="Subject"
        placeholder="Greetings from the New World!"
        required
        value={form.values.Subject}
        onChange={(event) => form.setFieldValue('Subject', event.currentTarget.value)}
      />
      <TextInput
        id="Project"
        label="Project"
        placeholder="Build Chesapeake"
        value={form.values.Project}
        onChange={(event) => form.setFieldValue('Project', event.currentTarget.value)}
      />
      <TextInput
        id="Trade"
        label="Trade"
        placeholder="Tobacco Cropper"
        value={form.values.Trade}
        onChange={(event) => form.setFieldValue('Trade', event.currentTarget.value)}
      />
      <Textarea
        label="Text"
      />
      <Button type="submit">Send</Button>
    </form>
  )
}

export default MessageCompose;