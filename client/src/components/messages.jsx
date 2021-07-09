import React, {useEffect, useState } from 'react';
import { Table, Divider, Spoiler } from '@mantine/core';
import Axios from 'axios';
import moment from 'moment';
import MessageList from './messagelist.jsx';
import MessageCompose from './messagecompose.jsx';
moment().format();

const URL = `http://localhost:3000/messages/all`

const Messages = (props) => {
  const [messages, setMessages ] = useState([]);
  const [ isLoaded, setIsLoaded ] = useState(false);

  useEffect(() => {
    getMessages();
    console.log("messages: ", messages)
  }, [])

  const getMessages = function() {
    return Axios.get(URL)
    .then(response => {
      console.log('res: ', response.data)
      setMessages(response.data)
      console.log(messages)
      setIsLoaded(true);
    })
    .catch(err => {
      console.log(err)
    })
  }


  return (
    isLoaded ?
    (<div>
      <div style={{display: "flex"}}>
        <MessageList/>
        <Table highlightOnHover>
          <thead>
            <tr>
              <th>Sender</th>
              <th>Subject</th>
              <th>Date</th>
              <th>Project</th>
              <th>Trade</th>
            </tr>
          </thead>
          <tbody>
            {messages.map(message => {
              return (
              <tr key={message.Date}>
                <td>{message.Sender}</td>
                <td>{message.Subject}</td>
                <td>{moment(message.Date).format('dddd, MMMM Do, YYYY')}</td>
                <td>{message.Project}</td>
                <td>{message.Trade}</td>
              </tr>
            )
            })}
          </tbody>
        </Table>
      </div>
      <Divider margins='m' label='Message Text' />
      <Spoiler maxHeight={240} showLabel="Show More" hideLabel="Hide">

      </Spoiler>
      <Divider margins='m' label="Compose Message" />
      <MessageCompose/>
    </div>
    ) :
    (<div>Loading...</div>)
  )
}

export default Messages;