import { useEffect } from "react";
import { useCharacterContext } from "@/context/CharacterContext/CharacterContext";

function useFetchCharacters() {
  const { dataCharacter, setDataCharacter } = useCharacterContext();
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
    fetchCharacters()
  }, []);
  return { dataCharacter }
}

export default useFetchCharacters