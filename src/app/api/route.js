import { NextResponse } from 'next/server'
 
export async function GET(request) {
  const exampleOfAJAXCall = {
    productId: 1,
    name: 'Wood'
  }
  return NextResponse.json(exampleOfAJAXCall, { status: 200 })
}