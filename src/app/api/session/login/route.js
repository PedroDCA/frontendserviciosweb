import { logInUser} from '@/services/sessionService';
import { NextResponse } from 'next/server'
 
/**
 * Handles the post request for log in an user.
 * @param {object} request Request information.
 * @returns The HTTP POST response.
 */
export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.error();
  }

  const body = await request.json();
  const response = await logInUser(body.email, body.password);
  return NextResponse.json(response, { status: 200 })
}
