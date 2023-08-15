import { createProductionPlanning } from '@/services/productionService';
import { NextResponse } from 'next/server'
 
export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.error();
  }

  const body = await request.json();
  const response = await createProductionPlanning(body);
  return NextResponse.json(response, { status: 200 })
}
