import React from "react"

const Counter = ({ counter }) => {
    return (
        <p className="counter">
            {counter}
            <span role="img" aria-label="heart icon">💗</span>
            given
        </p>
    )
}

export default Counter
