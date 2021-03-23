import React from "react"
import  { API_URL }  from "reusable/urls"

const ThoughtsForm = ({ thoughts, setThoughts, newThought, setNewThought }) => {

    const onNewThoughtChange = (event) => {
        setNewThought(event.target.value)
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
      
        const config = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({ message: newThought })
        }
        //Below there's backend sending a response back to us
        fetch(API_URL, config) 
        .then(res => res.json())
        .then(receivedThought => setThoughts([receivedThought, ...thoughts]))
        .catch(err => console.error(err));
         
      
      }
      
      return (
            <form onSubmit={onFormSubmit}>
                <label htmlFor="thoughts-form"> 
                  What's making you happy right now?
                </label>
              <input 
                id="thoughts-form"
                type="text"
                value={newThought}
                onChange={onNewThoughtChange}
                />
                <button className="form-button" type="submit">Send happy thought!</button>
            </form>
      )
}

export default ThoughtsForm