import React, {useEffect, useState } from 'react';
import { Table } from '@mantine/core';
import Axios from 'axios';

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
      // const formattedMessages = renderMessages(response.data)
    // })
    // .then(formattedMessages => {
      // console.log('formatted: ', formattedMessages)
      setMessages(response.data)
      console.log(messages)
      setIsLoaded(true);
    })
    .catch(err => {
      console.log(err)
    })
  }

// const renderMessages = function(messages) {
//   console.log('render this: ', messages)
//   const rows =
//   console.log('rendered: ', rows)
//   return rows;
// }

  return (
    isLoaded ?
    (<Table>
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
            <td>{message.Date}</td>
            <td>{message.Project}</td>
            <td>{message.Trade}</td>
          </tr>
        )
        })}
      </tbody>
    </Table>) :
    (<div>Loading...</div>)
  )
}

export default Messages;