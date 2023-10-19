"use client"
import { useParams, useRouter, useSearchParams } from "next/navigation";
import { Navigation } from "../../Navigation";
import CharacterForm from "@/components/CharacterForm";


export default function CharacterPage(){
    const router = useRouter();
    const id = useParams();
    

    return (
        <div>
            <Navigation />
            <CharacterForm id={id}/>
        </div>
            

    )
}