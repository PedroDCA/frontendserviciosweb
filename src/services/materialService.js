import addMaterialEndpoint from "../endpoints/addMaterialEndpoint"
import getAllMaterialsEndpoint from "../endpoints/getAllMaterialsEndpoint";

export const addNewMaterial = async (name) => {
  const response = await addMaterialEndpoint(name);
  const data = {
    materialId: response.Id,
    wasMaterialCreated: response.Successful,
    error: response.Error,
  };

  return data; 
};

export const getAllMaterials = async () => {
  const materialsFromAPI = await getAllMaterialsEndpoint();
  const materials = materialsFromAPI.map(material => ({
      id: material.id,
      name: material.name,
      quantity: material.quantity
    }));

  return materials; 
};
