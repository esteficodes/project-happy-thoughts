import moment from "moment"
import React from "react"

import { LIKES_URL } from "reusable/urls";

const ThoughtsCard = ({ thought }) => {

    const onLikesIncrease = (id) => {
        const options = {
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            }
        };

        fetch(LIKES_URL(id), options)
          .then(res => res.json())
          .then((data) =>  console.log(data))
          .catch(err => console.err(err));
      }
    

    return (
        <div className="thoughts-card"
        >
        <p className="thoughts-message">
           { thought.message }
        </p>
        <button onClick={() => onLikesIncrease(thought._id)}>
            {thought.likes}
        ❤️  
        </button>
          <div className="thoughts-time-container">
                <p className="thoughts-time">
                    {moment(thought.createdAt).fromNow()}
                </p>
          </div>
        </div>
    )
}

export default ThoughtsCard