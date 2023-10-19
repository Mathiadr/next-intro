import { NextRequest, NextResponse } from "next/server"
import { data } from "../route"

export function GET(
    request: NextRequest,
    { params }: { params: { id: string } },
  ) {
    console.log(params.id)
    // Uses /characters dummy data
    const character = data.find((item) => item.id === params.id)
    console.log(character)
    if(character) return NextResponse.json({ data: { params, character } }, { status: 200 })
    else return NextResponse.json({ status: 404 })  
}