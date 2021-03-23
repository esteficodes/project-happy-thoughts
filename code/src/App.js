import React, { useState, useEffect } from 'react';


import { API_URL } from "./reusable/urls";
import ThoughtsForm from "./Components/ThoughtsForm"
import ThoughtsCard from "./Components/ThoughtsCard"

export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

//useEffect should always be imported here right after the function declaration.
  useEffect(() => {
    fetchThoughts();
  }, []);

//fetching for the messages array
  const fetchThoughts = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setThoughts(data))
    .catch(err => console.log(err));  
  }

return (
  <>
   <ThoughtsForm
     thoughts={thoughts}
     setThoughts={setThoughts}
     newThought={newThought}
     setNewthought={setNewThought}
     />
     {thoughts.map(thoughts => (
       <ThoughtsCard
       thoughts={thoughts}
       />
     ))}
     </>
    )

   }
