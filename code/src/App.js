import React, { useEffect, useState } from 'react';


import { API_URL} from "./reusable/urls";
import ThoughtsForm from "./Components/ThoughtsForm"
import ThoughtsCard from "./Components/ThoughtsCard"

//useState variables here in the export function
export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [newThought, setNewThought] = useState("");

//useEffect hook should always be imported here right after the function declaration.

  useEffect(() => {
    fetchThoughts();
//empty array added to second argument to prevent a second fetch. This useEffect is added here to listen to just when the component is mounted.
  }, []);

  //Functions

//fetching for the messages array from the API
  const fetchThoughts = () => {
    fetch(API_URL)
    .then(res => res.json())
    .then(data => setThoughts(data))
    //catches errors during fetch
    .catch(err => console.log(err));  
  }

  
//Here we return the JSX for the thoughts form input
return (
  <>
  {/* This form sends the new thought message*/}
   <ThoughtsForm
     thoughts={thoughts}
     setThoughts={setThoughts}
     newThought={newThought}
     setNewThought={setNewThought}
     />
     {/*The mapping iterates over the thoughts array and returns the JSX for each though*/}
     {thoughts.map(thought => (
       <ThoughtsCard
        key={thought._id}
        thought={thought}
       />
     ))}
     </>
    )

   }
