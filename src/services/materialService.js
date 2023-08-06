import addMaterialEndpoint from "../endpoints/addMaterialEndpoint"
import getAllMaterialsEndpoint from "../endpoints/getAllMaterialsEndpoint";

export const addNewMaterial = async (materialInformation) => {
  const response = await addMaterialEndpoint(materialInformation);
  const wasMaterialCreated = response?.id && Number(response?.id) > 0;
  const data = {
    materialId: response.id,
    wasMaterialCreated,
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
