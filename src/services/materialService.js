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
  const materials = materialsFromAPI.map(material => {
    const processDataFormatted = material.processDataRequired.map((processData) => ({name: processData.Name, id: processData.Id}));
    const formattedMaterial = {
      name: material.Name,
      quantity: material.Quantity,
      processDataRequired: processDataFormatted
    };

    return formattedMaterial;
  });

  return materials; 
};
