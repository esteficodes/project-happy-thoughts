import React, { useState } from "react"

import { LIKE_URL_ID } from "../reusable/urls"

const Like = ({ thought, hearts, setHearts, Counter, setCounter}) => {
    const [isLiked, setIsLiked] = useState(false)

    const onLikesIncrease = () => {

        setIsLiked(true)
        setCounter(Counter +1)

        const postRequest = {
        method: "POST"
    }
    fetch(LIKE_URL_ID(thought._id), postRequest)
      .then(res => res.json())
      .then(receivedLike => (setHearts(receivedLike.hearts)))
    }

    return (
        <div className="hearts-container">
            <button
              className="hearts"
              disabled={isLiked}
              onClick={onLikesIncrease}
            >
                <span role="img" aria-label="heart-icon">💗</span>
            </button>
            <span>x{hearts}</span>

        </div>
    )
}

export default Like