import React from "react"
import  { API_URL }  from "reusable/urls"

const ThoughtsForm = ({ thoughts, setThoughts, newThought, setNewThought }) => {

//This updates the ThoughtsCard input value
    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
    }
//This saves the ThoughtsCard message on the server when the form is submitted. It uses fetch post request
    const onFormSubmit = (event) => {
        event.preventDefault();
      
        const postRequest = {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ message: newThought })
        }
        //Below there's backend sending a response back to us
        fetch(API_URL, postRequest) 
        .then(res => res.json())
        .then(receivedThought => setThoughts([receivedThought, ...thoughts]))
        .catch(err => console.error(err));

        setNewThought("")
         
      }

      console.log(thoughts);

      //This returns JSX for the ThoughtsForm
      return (
            <form className="thoughts-form" onSubmit={onFormSubmit}>
                <label htmlFor="thoughts-form"> 
                  What's making you happy right now?
                </label>
              <input 
                id="thoughts-form"
                type="text"
                value={newThought}
                onChange={onNewThoughtChange}
                />
                
                <button>
                  <span role="img" aria-label="heart icon">💗</span>
                  Send happy thought!
                  <span role="img" aria-label="heart icon">💗</span>
                </button>
            </form>
      )
}

export default ThoughtsForm