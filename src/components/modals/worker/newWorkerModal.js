import { getAllRoles } from "@/services/roleService";

const roles = getAllRoles();
const availableRoles = roles.filter(role => role.id !== 1);

export default function NewWorkerModal() {
  return (
    <div>
      <div className="modal fade" id="newWorkerModal" tabIndex="-1" aria-labelledby="newWorkerModalLabel" aria-hidden="true" data-modal data-new-worker>
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="newWorkerModalLabel">Agregar trabajador</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <p>Nombre y primer apellido del trabajador:</p>
              <input type="text" data-modal-worker-name/>
              <p>Ingrese el rol:</p>
              <select defaultValue={2} data-modal-role-id>
                {availableRoles.map((role, index) => {
                  return (<option value={role.id} key={index}>{role.name}</option>);
                })}
              </select>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
              <button type="button" className="btn btn-primary" data-create-worker>Crear</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}