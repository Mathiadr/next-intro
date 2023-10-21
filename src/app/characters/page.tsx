"use client"

import { useCharacter } from "@/features/useCharacter"
import { Navigation } from "../../components/Navigation"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

export default function CharactersPage(){
    const {characters, deleteCharacter, getCharacters} = useCharacter()
    const [selectedCharacter, setSelectedCharacter] = useState<Character>()
    const router = useRouter();

    useEffect(() => {
        getCharacters
    }, [])
    
    const handleSetSelected = (id: string) => {
        const target = characters.find((character) => character.id === id)
        console.log(`Selected CharacterId ${target?.id}`)
        //target !== undefined ? router.push(`/${target.id}`) : undefined
        setSelectedCharacter(target)
    }

    const handleGoToCharacterPage = (id: string) => {
        router.push(`/characters/${id}`)
    }

    
    
    const tableHeaderStyle = "px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider"
    const tableRowStyle = "px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900"
    return(
        <div>
            <Navigation />
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                    <th className={tableHeaderStyle}>
                        ID
                    </th>
                    <th className={tableHeaderStyle}>
                        Name
                    </th>
                    <th className={tableHeaderStyle}>
                        Level
                    </th>
                    <th className={tableHeaderStyle}>
                        Attack
                    </th>
                    <th className={tableHeaderStyle}>
                        Defense
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {characters.map((character) => (
                    <tr className={character === selectedCharacter ? `bg-blue-200` : undefined} 
                    key={character.id} 
                    onClick={() => handleSetSelected(character.id)}
                    onDoubleClick={() => handleGoToCharacterPage(character.id)}>
                        <td className={tableRowStyle}>{character.id}</td>
                        <td className={tableRowStyle}>{character.name}</td>
                        <td className={tableRowStyle}>{character.level}</td>
                        <td className={tableRowStyle}>{character.atk}</td>
                        <td className={tableRowStyle}>{character.def}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6 hover:text-yellow-300" onClick={() => router.push("/create")}>Create new</button> 
            {selectedCharacter !== undefined ? 
            <button
                type="submit"
                className="bg-red-500 text-white font-bold py-2 px-4 rounded-md m-6 hover:bg-red-700 hover:text-yellow-300 focus:outline-none"
                onClick={() => deleteCharacter(selectedCharacter.id)}>
                Delete
            </button> : undefined}
        </div>
    
    )
}