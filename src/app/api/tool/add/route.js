import { addNewTool } from '@/services/toolService';
import { NextResponse } from 'next/server'
 
/**
 * Handles the post request for adding a tool.
 * @param {object} request Request information.
 * @returns The HTTP POST response.
 */
export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.error();
  }

  const body = await request.json();
  const response = await addNewTool(body);
  return NextResponse.json(response, { status: 200 })
}
