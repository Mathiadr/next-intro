import { useEffect, useState } from "react"

export function useCharacter(){
    const [characters, setCharacters] = useState<Character[]>([])
    

    useEffect(() => {
        handleGetCharacters()
        console.log(characters)
    }, [])
    

    const handleGetCharacters = async () => {
        const response = await fetch("/api/characters",{
            method: "GET"
        })
        const result = (await response.json()) as Character[]
        setCharacters(result)
    }

    const handleGetCharacterById = async (id: string) => {
        
            try {
                const response = await fetch(
                    `http://localhost:${
                    process.env.NEXT_PUBLIC_PORT ?? 3000
                    }/api/characters/${id}`,
                    {
                    method: "get",
                    },
                )
                response.ok ? console.log(response) : console.error(response)
                console.log(JSON.stringify(response))
                const result = (await response.json()) as Character
                console.log(JSON.stringify(result))
                return result
            } catch (error) {
                throw new Error('Character not found');
            }
        
        throw new Error("Not implemented")
    }

    const handleSaveCharacter = async (character: Character) => {
        console.log(character)
        try {
            const response = await fetch("/api/characters",{
                method: "post",
                body: JSON.stringify(character),
                headers: {
                    "Content-Type": "application/json",
                  },
            })
            const result = await response.json()
            return result
        } catch (error) {
            return JSON.stringify(error)
        }
    }

    const deleteCharacter = () => {
        throw new Error("Not implemented")
    }

    return {
        characters: characters,
        setCharacters: setCharacters,
        getCharacters: handleGetCharacters,
        getCharacter: handleGetCharacterById,
        saveCharacter: handleSaveCharacter
    }
}