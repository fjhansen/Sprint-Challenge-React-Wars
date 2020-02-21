import React from "react"
import { StarCardList, StarCardTitle } from "../config/theme";


const StarCardContainer = props => {
  console.log(props)
  return(
    <div className="StarCardContainer">
     <StarCardTitle>{props.character.name}</StarCardTitle>
  <StarCardList>
  <li>Gender: {props.character.gender}</li>
  <li>Birth Year: {props.character.birth_year}</li>
  <li>Height: {props.character.height}</li>
  <li>Mass: {props.character.mass}</li>
  <li>Hair Color: {props.character.hair_color}</li>
  <li>Eye Color: {props.character.eye_color}</li>
  <li>Skin Color: {props.character.skin_color}</li>
  </StarCardList>
     
    </div>
  )
}

export default StarCardContainer