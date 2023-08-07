import { getAllWorkers } from '@/services/workerService';
import { NextResponse } from 'next/server'
 
export async function GET() {
  const response = await getAllWorkers();
  return NextResponse.json(response, { status: 200 })
}