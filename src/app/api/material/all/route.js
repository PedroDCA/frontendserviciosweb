import { getAllMaterials } from '@/services/materialService';
import { NextResponse } from 'next/server'
 
/**
 * Handles the get request for returning all the materials.
 * @returns The HTTP GET response.
 */
export async function GET() {
  const response = await getAllMaterials();
  return NextResponse.json(response, { status: 200 })
}