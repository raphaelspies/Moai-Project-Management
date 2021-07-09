import React from 'react';
import { Table } from '@mantine/core';

const Messages = (props) => {
  // const rows = props.messages.map(message => {
  //   <tr key={message.date}>
  //     <td>{message.sender}</td>
  //     <td>{message.subject}</td>
  //     <td>{message.date}</td>
  //     <td>{message.project}</td>
  //     <td>{message.trade}</td>
  //   </tr>
  // })

  return (
    <Table>
      <thead>
        <tr>
          <th>Sender</th>
          <th>Subject</th>
          <th>Date</th>
          <th>Project</th>
          <th>Trade</th>
        </tr>
      </thead>
      <tbody></tbody>
    </Table>
  )
}

export default Messages;