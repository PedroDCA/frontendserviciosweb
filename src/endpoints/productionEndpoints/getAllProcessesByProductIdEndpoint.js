import { getProductionPlanningUrl } from "../../routing/backendRoutes";

const getAllProcessesByProductIdEndpoint = async (productId) => {
  const url = new URL(getProductionPlanningUrl, {
    cache: 'no-store',
  });
  url.search = `productId=${productId}`;
  const response = await fetch(url.href);
  return response.json();
};

export default getAllProcessesByProductIdEndpoint;