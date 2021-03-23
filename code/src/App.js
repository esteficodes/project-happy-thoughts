import React, { useEffect} from 'react';

import { API_URL } from './reusable/urls';

export const App = () => {

  useEffect(() => {
    
  })

  const fetchMessageList = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(messages => console.log(messages))
    .catch(err => console.err(err));
    
  }

  fetchMessageList();

  return (
    <div>
      
    </div>
  )
}
