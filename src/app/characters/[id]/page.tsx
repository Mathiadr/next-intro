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
    const {postCharacter, getCharacterById} = useCharacter()
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
        postCharacter(formData)
        router.push("/characters")
    }
      
    const inputFieldStyle = "mt-1 p-2 w-full rounded-md border border-gray-300 bg-gray-100 focus:ring focus:ring-blue-200 focus:outline-none"
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
                type="text"
                id="id"
                name="id"
                readOnly
                value={formData.id}
                onChange={handleChange}
                className={inputFieldStyle}
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
                readOnly
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
                readOnly
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
                readOnly
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
                readOnly
                value={formData.def}
                onChange={handleChange}
                className={inputFieldStyle}
                />
            </div>
            <div className="flex gap-4 flex-row">
                <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded hover:text-yellow-300">
                    Save
                </button>
            </div>
        </form>
        </div>
        
    )
}