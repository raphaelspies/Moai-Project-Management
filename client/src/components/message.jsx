import React, {useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { Table, Divider } from '@mantine/core';
import moment from 'moment';
moment().format();

const Message = (props) => {
  const selectedMsg = useSelector(state => state.message.value);
  const dispatch = useDispatch();

  return (
    <tr>
    <td>{props.message.Sender}</td>
    <td>{props.message.Subject}</td>
    <td>{moment(props.message.Date).format('dddd, MMMM Do, YYYY')}</td>
    <td>{props.message.Project}</td>
    <td>{props.message.Trade}</td>
    </tr>
  )
}

export default Message;