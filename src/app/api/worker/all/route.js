import { getAllWorkers } from '@/services/workerService';
import { NextResponse } from 'next/server'
 
/**
 * Handles the post request for getting all the workers.
 * @returns The HTTP POST response.
 */
export async function GET() {
  const response = await getAllWorkers();
  return NextResponse.json(response, { status: 200 })
}