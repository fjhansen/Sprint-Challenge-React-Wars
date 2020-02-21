import React, { useState, useEffect } from "react";
import StarCardContainer from "./StarCardContainer";
import { WrapperDiv } from "../config/theme";

let url = "https://swapi.co/api/people/"



export default function StarCard() {

  const [people, setPeople] = useState([]);

  const fetchSpace = () => {
    fetch(url)
    .then(res => res.json())
    .then(people => {
      console.log(people.results)
      if (people.status === "error") {
        return;
      }
      setPeople(people.results);
    })
      .catch(err => console.log(`error! ${err}`))
  }

  useEffect(()=> {
    fetchSpace();
  },[]);
      

  return(
    <WrapperDiv>
        {people.map(character => (
          <StarCardContainer key={character.url} character={character}  />
        ))}
      </WrapperDiv>
  )
}