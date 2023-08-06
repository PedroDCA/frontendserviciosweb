
import { addNewMaterial } from '@/services/materialService';
import { NextResponse } from 'next/server'
 
export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.error();
  }

  const body = await request.json();
  const response = await addNewMaterial(body);
  return NextResponse.json(response, { status: 200 })
}
