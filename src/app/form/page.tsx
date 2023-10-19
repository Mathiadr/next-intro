"use client"
import { useCharacter } from "@/features/useCharacter";
import { ChangeEvent, FormEvent, useEffect, useState } from "react"
import { Navigation } from "../Navigation";
import CharacterForm from "@/components/CharacterForm";


export default async function CharacterFormPage(){
    const {characters} = useCharacter()

    const newCharacter: Character = {
        id: "",
        name: "",
        level: 0,
        atk: 0,
        def: 0
    }
    useEffect(() => {
        newCharacter.id = (`${characters.length+1}`)
    })
    
    return (
        <div>
            <Navigation />
            <CharacterForm id={newCharacter.id}/>
        </div>
    )
}