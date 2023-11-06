"use client"
import CardChar from "./CardChar";
import { ListCardContainer, ParentContainer } from "@/styledComponents/StyledComponents";
import { IDataCharacter } from "@/interfaces/ICharacter";
import useFetchCharacters from "@/app/hooks/useFetchChar";

function CharList() {
  const { dataCharacter } = useFetchCharacters();
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