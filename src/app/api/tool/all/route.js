import { getAllTools } from '@/services/toolService';
import { NextResponse } from 'next/server'

export async function GET() {
  const response = await getAllTools();
  return NextResponse.json(response, { status: 200 })
}