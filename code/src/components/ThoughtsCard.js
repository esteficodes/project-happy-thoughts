import moment from "moment"
import React, { useState } from "react"

import Like from "./Like"


const ThoughtsCard = ({ thought, Counter, setCounter }) => {
    const [hearts, setHearts] = useState(thought.hearts)

    
    return (
        <div className="thoughts-card">
        <p className="thoughts-message">
           {thought.message}
        </p>
          <div className="likes-time-container">
              <Like
                hearts={hearts}
                setHearts={setHearts}
                thought={thought}
                Counter={Counter}
                setCounter={setCounter}  
              />
                <p className="thoughts-time">
                {thought.userName} - {moment(thought.createdAt).fromNow()}
                </p>
          </div>
        </div>
    )
}

export default ThoughtsCard
