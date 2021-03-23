import React, { useState, useEffect } from 'react';

import { API_URL } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([])
//useEffect should always be imported here right after the function declaration.
  useEffect(() => {
    fetchMessageList();

  }, []);
//fetching for the messages array
  const fetchMessageList = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(messages => setMessageList(messages))
    .catch(err => console.err(err));
    
  }

  fetchMessageList();
//Here there should be added everything that we want to show on the app
  return (
    <div>
      {messageList.map(message => (
        <div key={message._id}>
          <h4>{message.text}</h4>
          <p>{new Date(message.createdAt).toDateString()}</p>
        </div>

     ))}
    </div>
  )
}
