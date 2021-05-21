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
        <div classname='newThoughtsContainer'>
          <h1 className= "app-title"><span role="img" aria-label="coding">👩‍💻</span>Happy Coding Thoughts<span role="img" aria-label="coding">👩‍💻</span></h1>
            <form className="thoughts-form" onSubmit={onFormSubmit}>
                <label htmlFor="thoughts-title"> 
                  <h1 className="thoughts-title">What's making you happy right now?</h1>
                </label>
              <textarea 
                className="form-input"
                id='newThought'
                type="text"
                minLength='5'
                maxLength='140'
                required
                placeholder="Write your happy coding thought here!..."
                value={newThought}
                onChange={onNewThoughtChange}>
                </textarea>
                
                <button className="form-button" type='submit'>
                  <span
                  role="img"
                  aria-label="heart icon">💗</span>
                  Send happy thought!
                  <span role="img" 
                  aria-label="heart icon">💗</span>
                </button>
            </form>
        </div>
      )
}

export default ThoughtsForm