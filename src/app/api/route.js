import { NextResponse } from 'next/server'
 
export async function GET() {
  return NextResponse.json({response}, { status: 200 })
}