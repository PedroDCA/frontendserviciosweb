import { getProductionPlanningByProductId } from '@/services/productionService';
import { NextResponse } from 'next/server'
 
export async function GET(request) {
  const { searchParams } = new URL(request.url)
  const productId = searchParams.get('productId')
  const response = await getProductionPlanningByProductId(productId);
  return NextResponse.json(response, { status: 200 })
}
