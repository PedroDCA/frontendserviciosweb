import { getAllMaterials } from '@/services/materialService';
import { NextResponse } from 'next/server'
 
export async function GET() {
  const response = await getAllMaterials();
  return NextResponse.json(response, { status: 200 })
}