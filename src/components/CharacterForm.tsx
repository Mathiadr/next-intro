"use client"
import { useCharacter } from "@/features/useCharacter";
import { ChangeEvent, FormEvent, useEffect, useState } from "react"


let createNewCharacter: Character = {
    id: "",
    name: "",
    level: 0,
    atk: 0,
    def: 0
}



export default function CharacterForm(id?: string){
    const [formData, setFormData] = useState<Character>(createNewCharacter)
    const {saveCharacter, getCharacter, characters} = useCharacter()

    useEffect(() => {
        id = "1" // Hardcoded because I failed to translate the parameter to a string...
        fetchOrCreateNew()
    },[])

    const fetchOrCreateNew = async() => {
        id ? "" : id = `${characters.length+1}`
        try {
            const result = (await getCharacter(id)) as Character
            result ? setFormData(result) : setFormData({ ...formData, id: id })
            setFormData(result)
        } catch (error) {
            createNewCharacter.id = id
            setFormData(createNewCharacter)
        }
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
      
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        saveCharacter(formData)
    }
      
    const inputFieldStyle = "mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none"
    const labelStyle = "block text-sm font-medium text-gray-700"

    return (
        <div>
            <form onSubmit={handleSubmit} className="p-10">
            <div className="mb-4">
                <label htmlFor="id" className={labelStyle}>
                Id
                </label>
                <input
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                readOnly
                disabled
                className={`${inputFieldStyle} bg-gray-100`}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="name" className={labelStyle}>
                Name
                </label>
                <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={inputFieldStyle}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="level" className={labelStyle}>
                Level
                </label>
                <input
                type="number"
                id="level"
                name="level"
                value={formData.level}
                onChange={handleChange}
                className={inputFieldStyle}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="atk" className={labelStyle}>
                Attack
                </label>
                <input
                type="number"
                id="atk"
                name="atk"
                value={formData.atk}
                onChange={handleChange}
                className={inputFieldStyle}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="def" className={labelStyle}>
                Defense
                </label>
                <input
                type="number"
                id="def"
                name="def"
                value={formData.def}
                onChange={handleChange}
                className={inputFieldStyle}
                />
            </div>
            <div className="flex gap-4 flex-row">
                <button
                type="submit"
                className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 hover:text-yellow-300 focus:outline-none">
                Save
                </button>
                <button
                type="submit"
                className="bg-red-500 text-white p-2 rounded-md hover:bg-red-700 hover:text-yellow-300 focus:outline-none">
                Delete
                </button>
            </div>
            
        </form>
        </div>
        
    )
}