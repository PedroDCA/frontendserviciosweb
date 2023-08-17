
import { getAllProducts } from '@/services/productService';
import { NextResponse } from 'next/server'
 
/**
 * Handles the get request for getting all the products.
 * @returns The HTTP GET response.
 */
export async function GET() {
  const response = await getAllProducts();
  return NextResponse.json(response, { status: 200 })
}