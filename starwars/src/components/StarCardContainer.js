import React from "react"

const StarCardContainer = props => {
  console.log(props)
  return(
    <div>
      <h3>{props.character.name}</h3>
    </div>
  )
}

export default StarCardContainer