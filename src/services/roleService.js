const roles = [
  {
    id: 1,
    name: 'Administrador'
  },
  {
    id: 2,
    name: 'Ebanista'
  },
  {
    id: 3,
    name: 'Pintor'
  },
  {
    id: 4,
    name: 'Tapizador'
  },
  {
    id: 5,
    name: 'Diseñador'
  },
];

/**
 * Get a list of roles.
 * @returns List of roles
 */
export const getAllRoles = () => {
  return roles;
}

/**
 * Gets the role information by its id.
 * @param {Number} id Role id.
 * @returns The role information.
 */
export const getRoleById = (id) => {
  return roles.filter(role => role.id === id)[0] || {};
}