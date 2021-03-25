import React, { useState } from "react"





const Like = ({ thought, hearts, setHearts, Counter, setCounter}) => {
    const [isLiked, setIsLiked] = useState(false)

    const onHeartChange = () => {

        setIsLiked(true)
        setCounter(Counter +1)

        const API_URL_ID = `https://happy-thoughts-technigo.herokuapp.com/thoughts/${thought._id}/like`

        const postRequest = {
        method: "POST"
    }

    fetch(API_URL_ID, postRequest)
      .then(res => res.json())
      .then(receivedLike => (setHearts(receivedLike.hearts)))
    }

    return (
        <div className="hearts-container">
            <button
              disabled={isLiked}
              className="hearts"
              onClick={onHeartChange}
            >
                <span role="img" aria-label="heart-icon">💗</span>
            </button>
            <span>  {hearts}</span>

        </div>
    )
}

export default Like