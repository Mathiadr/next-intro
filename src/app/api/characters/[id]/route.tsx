import { NextRequest, NextResponse } from "next/server"
import { data, replaceData} from "../route"

export function GET(
    request: NextRequest,
    { params }: { params: { id: string } },
  ) {
    // Uses /api/characters dummy data
    const character = data.find((item) => item.id === params.id)
    if(character) return NextResponse.json(character , { status: 200 })
    else return NextResponse.json({ status: 404 })  
}

export async function PUT(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const body = (await request.json()) as Character
  const characterIndex = data.findIndex((item) => item.id === params.id)
  const newData = [
    ...data.slice(0, characterIndex),
    {...body},
    ...data.slice(characterIndex + 1),
  ]
  replaceData(newData)
  return NextResponse.json(body, { status: 200 })
}

export function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } },
) {
  const newData = data.filter((item) => item.id !== params.id)
  replaceData(newData)
  return NextResponse.json({ data: { params, data } }, { status: 200 })
}
