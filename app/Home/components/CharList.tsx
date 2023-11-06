"use client"
import { useEffect, useState } from "react";
import CardChar from "./CardChar";
import { ListCardContainer, ParentContainer } from "@/styledComponents/StyledComponents";
import { IDataCharacter } from "@/interfaces/ICharacter";

function CharList() {
  const [dataCharacter, setDataCharacter] = useState<IDataCharacter[] | null>(null);
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          "https://rickandmortyapi.com/api/character"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        setDataCharacter(responseData.results);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters();
  }, []);
  return (
    <ParentContainer>
    <ListCardContainer>
      {dataCharacter?
        dataCharacter.map((character: IDataCharacter) => (
          <div key={character.id}>
            <CardChar
              image={character.image}
              name={character.name}
              status={character.status}
              location={character.location.name}
            />
          </div>
        )):<div>Loading...</div>}
    </ListCardContainer>
    </ParentContainer>
  );
}

export default CharList;