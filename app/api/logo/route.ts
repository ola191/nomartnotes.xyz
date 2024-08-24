import fs from 'fs'
import path from 'path'
import { NextResponse } from 'next/server'

const filePath = path.resolve('./public/favicon.jpg')

export async function GET() {
  try {
    const imageBuffer = fs.readFileSync(filePath)
    return new NextResponse(imageBuffer, {
      status: 200,
      headers: { 'Content-Type': 'image/jpeg' },
    })
  } catch (error) {
    return new NextResponse('Internal Server Error', { status: 500 })
  }
}