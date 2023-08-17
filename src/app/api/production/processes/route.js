import { getProductionPlanningByProductId } from '@/services/productionService';
import { NextResponse } from 'next/server'
 
/**
 * Handles the get request for getting the product process for a product.
 * @param {object} request Request information.
 * @returns The HTTP GET response.
 */
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get('productId');
  const response = await getProductionPlanningByProductId(productId);
  return NextResponse.json(response, { status: 200 })
}
