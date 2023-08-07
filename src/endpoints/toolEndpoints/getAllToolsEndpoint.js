import { getAllToolsUrl } from "@/routing/backendRoutes";

const getAllToolsEndpoint = async () => {
  const mockData = [
    {
      name: 'Martillo',
      id: 3,
      quantity: 2,
    },
    {
      name: 'Lapiz',
      id: 1,
      quantity: 1,
    },
    {
      name: 'Computadora',
      id: 6,
      quantity: 4,
    },
  ];
  return mockData;

  const response = await fetch(getAllToolsUrl);
  return response.json();
};

export default getAllToolsEndpoint;