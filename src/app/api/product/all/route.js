
import { getAllProducts } from '@/services/productService';
import { NextResponse } from 'next/server'
 
export async function GET() {
  const response = await getAllProducts();
  return NextResponse.json(response, { status: 200 })
}