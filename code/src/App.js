import React, { useEffect, useState } from 'react';


import { API_URL } from "./reusable/urls";
import ThoughtsForm from "./Components/ThoughtsForm"
import ThoughtsCard from "./Components/ThoughtsCard"

//useState variables here
export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

//useEffect should always be imported here right after the function declaration.
  useEffect(() => {
    fetchThoughts();
//empty array added to second argument to prevent a second fetch. This useEffect is added here to listen to just when the component is mounted.
  }, []);

//fetching for the messages array
  const fetchThoughts = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setThoughts(data))
    .catch(err => console.log(err));  
  }
//Here we return the JSX for the thoughts form input
return (
  <>
   <ThoughtsForm
     thoughts={thoughts}
     setThoughts={setThoughts}
     newThought={newThought}
     setNewThought={setNewThought}
     />
     {thoughts.map(thought => (
       <ThoughtsCard
        key={thought._id}
        thought={thought}
       />
     ))}
     </>
    )

   }
