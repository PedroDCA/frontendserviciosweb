import { getProductionPlanningUrl } from "../../routing/backendRoutes";

const getAllProcessesByProductId = async (productId) => {
  const url = new URL(getProductionPlanningUrl);
  url.search = `productId=${productId}`;
  const response = await fetch(url.href);
  return response.json();
};

export default getAllProcessesByProductId;