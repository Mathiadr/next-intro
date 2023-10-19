import { NextRequest, NextResponse } from "next/server"

export let data: Character[] = [
    {
        id: "1",
        name: "Grug",
        level: 23,
        atk: 65,
        def: 23
    },
    {
        id: "2",
        name: "Greg",
        level: 2,
        atk: 21,
        def: 78
    },
    {
        id: "3",
        name: "Grag",
        level: 200,
        atk: 6500,
        def: 0    
    },
    {
        id: "4",
        name: "Greaeg",
        level: 420,
        atk: 1,
        def: 1000    
    }
]

export function GET() {
    return NextResponse.json(data, { status: 200 })
}

export async function POST(request: NextRequest) {
    const data = await request.json()
    return NextResponse.json(data, { status: 200 })
}

export function DELETE(
    request: NextRequest,
    { params }: { params: {id: string} }
){

}

/*
export const updateData = async(id: string) => {
    try {
      const response = await fetch("/api/characters/1", {
        method: "put",
        body: JSON.stringify({}),
        headers: {
            "Content-Type": "application/json"
        }
      })
      const result = await response.json()
      return result
    } catch (error){
        return "Bad request"
    }
  }
*/
