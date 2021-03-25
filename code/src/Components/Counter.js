import React from "react"

const Counter = ({ Counter }) => {
    return (
        <p className="like-counter">
            {Counter}
            <span role="img" aria-label="heart icon">💗</span>
            given
        </p>
    )
}

export default Counter