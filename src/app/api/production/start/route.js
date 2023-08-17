import { startProduction } from '@/services/productionService';
import { NextResponse } from 'next/server'
 
/**
 * Handles the post request for start a production.
 * @param {object} request Request information.
 * @returns The HTTP POST response.
 */
export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.error();
  }

  const body = await request.json();
  const response = await startProduction(body);
  return NextResponse.json(response, { status: 200 })
}
