import { testing } from '@/services/testing'
import { NextResponse } from 'next/server'
 
export async function GET() {
  const response = await testing();
  return NextResponse.json({response}, { status: 200 })
}