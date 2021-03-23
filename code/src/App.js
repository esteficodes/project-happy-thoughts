import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([])
  const [messageNew, setMessageNew] = useState('');
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
//Here goes the jsx so there should be added everything that we want to show on the app. 
//Below I'm adding a form that will show the messages. this form can be a component on its own.
const onMessageNewChange = (event) => {
  setMessageNew()
}

return (
    <div>
      <form>
        <label htmlFor="newMessage">Write a new message!</label>
        <input 
          id="newMessage"
          type="text"
          value={messageNew}
          onChange
          />
      </form>

      {messageList.map(message => (
        <div key={message._id}>
          <h4>{message.text}</h4>
          <p className="date">-{moment(message.createdAt).fromNow()}</p>
        </div>

     ))}
    </div>
  )
}
