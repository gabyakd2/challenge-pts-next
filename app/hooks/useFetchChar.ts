import { useState, useEffect } from "react";
import { useCharacterContext } from "@/context/CharacterContext/CharacterContext";

function useFetchCharacters() {
  const { dataCharacter, setDataCharacter } = useCharacterContext();
  const [pageNumber, setPageNumber] = useState<number>(1);
  
  useEffect(() => {
    const fetchCharacters = async () => {
      try {
        const response = await fetch(
          `https://rickandmortyapi.com/api/character/?page=${pageNumber}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const responseData = await response.json();
        if (dataCharacter !== null) {
          setDataCharacter([...dataCharacter, ...responseData.results]);
        } else {
          setDataCharacter(responseData.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    fetchCharacters()
  }, [pageNumber]);
  return { dataCharacter, pageNumber, setPageNumber }
}

export default useFetchCharacters