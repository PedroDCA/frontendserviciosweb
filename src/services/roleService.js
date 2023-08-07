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

export const getAllRoles = () => {
  return roles;
}

export const getRoleById = (id) => {
  return roles.filter(role => role.id === id)[0] || {};
}