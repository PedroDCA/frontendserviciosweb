import { logInUser} from '@/services/sessionService';
import { NextResponse } from 'next/server'
 
export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.error();
  }

  const body = await request.json();
  const response = await logInUser(body.email, body.password);
  return NextResponse.json(response, { status: 200 })
}
