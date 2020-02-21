import React from "react"
import { StarCardList, StarCardTitle, B } from "../config/theme";


const StarCardContainer = props => {
  console.log(props)
  return(
    <div className="StarCardContainer">
     <StarCardTitle>{props.character.name}</StarCardTitle>
  <StarCardList>
  <li><B>Gender: </B>{props.character.gender}</li>
  <li><B>Birth Year: </B> {props.character.birth_year}</li>
  <li><B>Height: </B>{props.character.height}</li>
  <li><B>Mass: </B> {props.character.mass}</li>
  <li><B>Hair Color: </B>{props.character.hair_color}</li>
  <li><B>Eye Color: </B>{props.character.eye_color}</li>
  <li><B>Skin Color: </B>{props.character.skin_color}</li>
  </StarCardList>
     
    </div>
  )
}

export default StarCardContainer