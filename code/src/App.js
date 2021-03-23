import React, { useState, useEffect } from 'react';
import moment from 'moment';

import { API_URL } from './reusable/urls';

export const App = () => {
  const [messageList, setMessageList] = useState([]);
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

//Here goes the jsx so there should be added everything that we want to show on the app. 
//Below I'm adding a form that will show the messages. this form can be a component on its own.
const onMessageNewChange = (event) => {
  setMessageNew(event.target.value)
}

//Writing a function that activates everytime we submit the form
const onFormSubmit = (event) => {
  event.preventDefault();

  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ text: messageNew })
  }
  //Below there's backend sending a response back to us
  fetch(API_URL, options) 
  .then(res => res.json())
  .then(receivedMessage => setMessageList([...messageList, receivedMessage]))
  .catch(err => console.error(err));
   

}

return (
    <div>
      <form onSubmit={onFormSubmit} className="thoughts-form"> 
        <label className="form-title" htmlFor="newMessage">What's making you happy right now?</label>
        <input 
          id="newMessage"
          type="text"
          value={messageNew}
          onChange={onMessageNewChange}
          />
          <button className="form-button" type="submit">Send happy thought!</button>
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
