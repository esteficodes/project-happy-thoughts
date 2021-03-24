import moment from "moment"
import React from "react"

const ThoughtsCard = ({ thought }) => {
    

    return (
        <div className="thoughtsCard"
        >
        <p className="thoughts-message">
           { thought.message }
        </p>
          <div className="thoughts-time-container">
                <p className="thoughts-time">
                    {moment(thought.createdAt).fromNow()}
                </p>
          </div>
        </div>
    )
}

export default ThoughtsCard