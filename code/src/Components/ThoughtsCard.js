import moment from "moment"
import React from "react"

const ThoughtsCard = ({ thoughts }) => {
    

    return (
        <div
        key={thoughts._id}
        classname="thoughtsCard"
        >
        <p className="thoughts-message">
           { thoughts.message }
        </p>
        <p className="thought-time">
                    {moment(thoughts.createdAt).fromNow()}
                </p>
        </div>
    )
}

export default ThoughtsCard