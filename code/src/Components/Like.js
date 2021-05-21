import React, { useState } from "react"



const Like = ({ thought, hearts, setHearts, Counter, setCounter, LIKE_URL_ID}) => {
    const [isLiked, setIsLiked] = useState(false)

    const onLikesIncrease = () => {

        setIsLiked(true)
        setCounter(Counter +1)

        const postRequest = {
        method: "POST"
    }

    fetch(LIKE_URL_ID, postRequest)
      .then(res => res.json())
      .then(receivedLike => (setHearts(receivedLike.hearts)))
    }

    return (
        <div className="hearts-container">
            <button className="hearts"
              disabled={isLiked}
              onClick={onLikesIncrease}
            >
                <span className={thought.hearts > 0 ? 'heart-button-liked' : 'heart-button-no-likes'} role="img" aria-label="heart-icon">💗</span>
            </button>
            <p className='likes-counter'>x {thought.hearts}</p>
            <span>  {hearts}</span>

        </div>
    )
}

export default Like