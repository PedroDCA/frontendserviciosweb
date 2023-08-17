import { createProductionPlanning } from '@/services/productionService';
import { NextResponse } from 'next/server'
 
/**
 * Handles the post request for adding a product planning.
 * @param {object} request Request information.
 * @returns The HTTP POST response.
 */
export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.error();
  }

  const body = await request.json();
  const response = await createProductionPlanning(body);
  return NextResponse.json(response, { status: 200 })
}
