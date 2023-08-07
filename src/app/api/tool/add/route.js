import { addNewTool } from '@/services/toolService';
import { NextResponse } from 'next/server'
 
export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.error();
  }

  const body = await request.json();
  const response = await addNewTool(body);
  return NextResponse.json(response, { status: 200 })
}
