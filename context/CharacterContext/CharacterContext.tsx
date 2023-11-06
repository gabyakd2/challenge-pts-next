"use client"
import { IDataCharacter } from "@/interfaces/ICharacter";
import { createContext, useContext, Dispatch, SetStateAction,  useState } from "react";

//Se define que valor tendra el contexto
interface CharacterContextValue {
  dataCharacter: IDataCharacter[] | null;
  setDataCharacter: Dispatch<SetStateAction<IDataCharacter[] | null>>;
}

//Se crea el contexto
export const CharacterContext = createContext<CharacterContextValue | undefined>(undefined)

//Se define un proveedor el cual envolverla la aplicación
export function CharacterProvider({children}: {children:React.ReactNode}) {
    const [dataCharacter, setDataCharacter] = useState<IDataCharacter[] | null>(null)

    const contextValue: CharacterContextValue = {
      dataCharacter,
      setDataCharacter,
    };
  return (
    <CharacterContext.Provider value={contextValue}>
      {children}
    </CharacterContext.Provider>
  )
}

//Se define un hook para usar el contexto
export function useCharacterContext() {
  const context = useContext(CharacterContext);
  if(context === undefined) {
    throw new Error("useCharacterContext must be used within a CharacterProvider");
  }
  return context;
}
