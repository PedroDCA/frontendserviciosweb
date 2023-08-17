import { getAllTools } from '@/services/toolService';
import { NextResponse } from 'next/server'

/**
 * Handles the get request for getting all the materials.
 * @returns The HTTP GET response.
 */
export async function GET() {
  const response = await getAllTools();
  return NextResponse.json(response, { status: 200 })
}