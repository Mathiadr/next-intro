"use client"

import { useEffect, useState } from "react"
import CharacterItem from "../components/CharacterItem"
import { as } from "vitest/dist/reporters-5f784f42"

export default async function Characters(){
    const [characters, setCharacters] = useState<Character[]>([])

    
    const getCharacters = async() => {
        try {
            const response = await fetch("/api/characters",
            {
                method: "GET"
            })
            const result = await response.json()
            return result
        } catch (error) {
            return console.error(error)
        }
    }

    useEffect(() => {
        setCharacters((getCharacters()) as Character[])
    })
    
    

    return(
        <body>
            <table>
                <CharacterList>
                    <CharacterItem></CharacterItem>
                </CharacterList>
            </table>
        </body>
    )
}