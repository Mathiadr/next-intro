"use client"
import { Navigation } from "@/components/Navigation"
import { useCharacter } from "@/features/useCharacter"
import { useRouter } from "next/navigation"
import { ChangeEvent, FormEvent, useEffect, useState } from "react"

const placeholder: Character = {
        id: "",
        name: "",
        level: 0,
        atk: 0,
        def: 0
    }

export default function CharacterPage({params}: {params: { id: string }}){
    const {getCharacterById, updateCharacter, deleteCharacter} = useCharacter()
    const [formData, setFormData] = useState<Character>(placeholder)
    const router = useRouter()

    

    useEffect(() => {
        getCharacter(params.id)
    }, [])
    
    const getCharacter = async(id: string) =>{
        const result = await getCharacterById(id)
        console.log(result)
        setFormData(result)
    }

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
      
    const handleSubmit = (e: FormEvent) => {
        e.preventDefault()
        console.log(formData)
        updateCharacter(formData.id, formData)
        router.push("/characters")
    }
      
    const inputFieldStyle = "mt-1 p-2 w-full rounded-md border border-gray-300 focus:ring focus:ring-blue-200 focus:outline-none"
    const labelStyle = "block text-sm font-medium text-gray-700"

    return (
        <div>
            <Navigation />
            <form onSubmit={handleSubmit} className="p-10">
            <div className="mb-4">
                <label htmlFor="id" className={labelStyle}>
                    ID
                </label>
                <input
                required
                readOnly
                type="text"
                id="id"
                name="id"
                value={formData.id}
                onChange={handleChange}
                className={"mt-1 p-2 w-full rounded-md border border-gray-300 bg-gray-100 focus:ring focus:ring-blue-200 focus:outline-none"}
                />
            </div>
            <div className="mb-4">
                <label htmlFor="name" className={labelStyle}>
                    Name
                </label>
                <input
                required
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
            <div  className="flex flex-row gap-4">
                <div className="flex gap-4 flex-row">
                    <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:text-yellow-300">
                        Save
                    </button>
                </div>
                <div className="flex gap-4 flex-row">
                    <button
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded hover:text-yellow-300"
                    onClick={() => deleteCharacter(formData.id)}>
                        Delete
                    </button>
                </div>
            </div>
        </form>
        </div>
        
    )
}