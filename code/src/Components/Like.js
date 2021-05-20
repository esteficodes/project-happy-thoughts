import React, { useState } from "react"



const Like = ({ thought, hearts, setHearts, Counter, setCounter}) => {
    const [isLiked, setIsLiked] = useState(false)

    const onLikesIncrease = () => {

        setIsLiked(true)
        setCounter(Counter +1)

        const LIKE_URL_ID = `https://happy-thoughts-api-estefania.herokuapp.com/thoughts${ID}/like`

        const postRequest = {
        method: "POST"
    }

    fetch(LIKE_URL_ID, postRequest)
      .then(res => res.json())
      .then(receivedLike => (setHearts(receivedLike.hearts)))
    }

    return (
        <div className="hearts-container">
            <button
              disabled={isLiked}
              className="hearts"
              onClick={onLikesIncrease}
            >
                <span role="img" aria-label="heart-icon">💗</span>
            </button>
            <span>  {hearts}</span>

        </div>
    )
}

export default Like