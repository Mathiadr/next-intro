import { useEffect, useState } from "react"

export function useCharacter(){
    const [characters, setCharacters] = useState<Character[]>([])
    

    useEffect(() => {
        handleGetCharacters()
    }, [])
    
    // Avoids creating two identical rows IDs
    const getUniqueId = () => {
        let id = 1
        for (let index = 0; index < characters.length; index++) {
            if (characters[index].id === `${id}`) {
                id++
                index = 0
            }
        }
        return `${id}`
    }

    const handleGetCharacters = async () => {
        const response = await fetch("/api/characters",{
            method: "GET"
        })
        const result = (await response.json()) as Character[]
        setCharacters(result)
        console.log(`Got ${result.length} Characters`)
    }

    const handleGetCharacterById = async (id: string) => {
            try {
                const response = await fetch(`/api/characters/${id}`,
                    {
                    method: "GET",
                    })
                const result = (await response.json()) as Character
                return result
            } catch (error) {
                throw new Error('Character not found');
            }
    }

    const handlePostCharacter = async (character: Character) => {
        console.log(`Saving character: ${character.name}`)
        try {
            if(character.id === "") character.id = getUniqueId()
            const response = await fetch("/api/characters",{
                method: "POST",
                body: JSON.stringify(character),
                headers: {
                    "Content-Type": "application/json",
                  },
            })
            const result = await response.json()
            setCharacters((prev) => [...prev, character])
            return result
        } catch (error) {
            return JSON.stringify(error)
        }
    }

    const handleUpdateCharacter = async(id: string, characterData: Character) => {
        console.log(`Updating characterId: ${characterData.id}`)
        try {
            const response = await fetch(`/api/characters/${id}`,{
                method: "PUT",
                body: JSON.stringify(characterData),
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

    const handleDeleteCharacter = async (id: string) => {
        console.log(`Deleting CharacterId: ${id}`)
        try {
            const response = await fetch(`/api/characters/${id}`,{
                method: "DELETE",
            })
            const result = await response.json()
            // To update the UI
            const newCharacters = characters.filter((character) => character.id !== id)
            setCharacters(newCharacters)
            return result
        } catch (error) {
            return JSON.stringify(error)
        }
        
    }

    return {
        characters: characters,
        setCharacters: setCharacters,
        getCharacters: handleGetCharacters,
        getCharacterById: handleGetCharacterById,
        postCharacter: handlePostCharacter,
        updateCharacter: handleUpdateCharacter,
        deleteCharacter: handleDeleteCharacter
    }
}