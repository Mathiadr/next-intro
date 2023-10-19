"use client"
import { useCharacter } from "@/features/useCharacter"
import { redirect } from "next/navigation"
import { useRouter } from "next/navigation"
import { useState } from "react"

export function CharacterTable(){
    const {characters, setCharacters, getCharacters, saveCharacter} = useCharacter()
    const [isFormHidden, setFormHidden] = useState(true)
    const router = useRouter();

    const handleOnClickCreateDummy = () => {
        const dummy: Character = {
            id: `${characters.length+1}`,
            name: "Dummy",
            level: 10,
            atk: 10,
            def: 10
        }
        saveCharacter(dummy)
    }
    
    const handleSetSelected = (id: string) => {
        const target = characters.find((character) => character.id === id)
        console.log(`Selected Character ${target?.id}`)
        //target !== undefined ? router.push(`/${target.id}`) : undefined
        router.push(`/characters/${target?.id}`)
    }
    

    return(
        <div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead>
                    <tr>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        ID
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Name
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Level
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Attack
                    </th>
                    <th className="px-6 py-3 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                        Defense
                    </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {characters.map((character) => (
                    <tr key={character.id} onClick={() => handleSetSelected(character.id)}>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{character.id}</td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{character.name}</td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{character.level}</td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{character.atk}</td>
                        <td className="px-6 py-4 whitespace-no-wrap text-sm leading-5 text-gray-900">{character.def}</td>
                    </tr>
                    ))}
                </tbody>
            </table>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded m-6" onClick={handleOnClickCreateDummy}>Create Dummy</button> 
            
        </div>
    
    )
}