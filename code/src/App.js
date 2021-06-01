import React, { useEffect, useState } from 'react';

import { API_URL} from "./reusable/urls";
import ThoughtsForm from "./components/ThoughtsForm";
import ThoughtsCard from "./components/ThoughtsCard";
import Counter from "./components/Counter";

//useState variables here in the export function
export const App = () => {
  const [thoughts, setThoughts] = useState([]);
  const [isPending, setIsPending] = useState(true)
  const [newThought, setNewThought] = useState("");
  const [username, setUsername] = useState("")
  const [error, setError] = useState(null)
  const [counter, setCounter] = useState(0)

//useEffect hook should always be imported here right after the function declaration.

  useEffect(() => {
    fetchThoughts();
//empty array added to second argument to prevent a second fetch. This useEffect is added here to listen to just when the component is mounted.
  }, []);

  //Functions

//fetching for the messages array from the API
  const fetchThoughts = () => {
    fetch(API_URL)
    .then(res => {
      if (!res.ok) {
        throw Error('Unable to fetch data')
      }
      return res.json()
    })
    .then(data => {
      setThoughts(data)
      //Changing the pending state when complete
    setIsPending(false)
      setError(null)
    })
    //catches errors during fetch
    .catch(err => {
      setIsPending(false)
      setError(err.message)
    })
  }

  
 return (
  <main className='main-wrapper'>
    {error && <div>{ error }</div>}
  {/* This form sends the new thought message*/}
   <ThoughtsForm
     thoughts={thoughts}
     setThoughts={setThoughts}
     newThought={newThought}
     setNewThought={setNewThought}
     username={username}
        setUsername={setUsername}
     />
      {isPending && <div className='loading-message'>Loading...</div>}
     {/*The mapping iterates over the thoughts array and returns the JSX for each though*/}
     {thoughts.map(thought => (
       <ThoughtsCard
        key={thought._id}
        thought={thought}
        setThoughts={setThoughts}
        counter={counter}
        setCounter={setCounter}
       />
     ))
     }
     <Counter Counter={Counter} />
     </main>
    )

   }
