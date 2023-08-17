import updateMaterialEndpoint from "@/endpoints/materialEndpoints/updateMaterialEndpoint";
import addMaterialEndpoint from "../endpoints/materialEndpoints/addMaterialEndpoint"
import getAllMaterialsEndpoint from "../endpoints/materialEndpoints/getAllMaterialsEndpoint";

/**
 * Adds a new material.
 * @param {object} materialInformation Information about the material to add.
 * @returns 
 */
export const addNewMaterial = async (materialInformation) => {
  const response = await addMaterialEndpoint(materialInformation);
  const wasMaterialCreated = response?.id && Number(response?.id) > 0;
  const data = {
    materialId: response.id,
    wasMaterialCreated,
  };

  return data; 
};

/**
 * Gets all the current materials.
 * @returns A list of materials.
 */
export const getAllMaterials = async () => {
  const materialsFromAPI = await getAllMaterialsEndpoint();
  const materials = materialsFromAPI.map(material => ({
      id: material.id,
      name: material.name,
      quantity: material.quantity
    }));

  return materials; 
};

/**
 * Updates the information of a material.
 * @param {object} materialInformation Information about the material to add.
 * @returns If material was saved.
 */
export const updateMaterial = async (materialInformation) => {
  const materialsFromAPI = await updateMaterialEndpoint(materialInformation);
  return materialsFromAPI; 
};
