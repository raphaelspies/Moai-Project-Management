import React, {useEffect, useState } from 'react';
import { Table, Divider } from '@mantine/core';

const Message = (props) => {
  return (
    <tr key={props.Date}>
    <td>{props.Sender}</td>
    <td>{props.Subject}</td>
    <td>{moment(props.Date).format('dddd, MMMM Do, YYYY')}</td>
    <td>{props.Project}</td>
    <td>{props.Trade}</td>
    </tr>
  )
}