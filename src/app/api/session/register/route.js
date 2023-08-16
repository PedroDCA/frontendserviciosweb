import { signUpUser } from '@/services/sessionService';
import { NextResponse } from 'next/server'
 
export async function POST(request) {
  if (request.method !== 'POST') {
    return NextResponse.error();
  }

  const body = await request.json();
  console.log(body)
  const response = await signUpUser(body.email, body.password, body.name, body.lastName);
  return NextResponse.json(response, { status: 200 })
}
