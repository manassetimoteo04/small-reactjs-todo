import { Trash2 } from "react-feather";

export function AlertPopup({ onConfirm, onCancel }) {
  return (
    <>
      <div className="overlay" onClick={onCancel}></div>
      <div className="popup">
        <div>
          <Trash2 width={24} />
          <span>Tens a certeza que deseja eliminar esta tarefa?</span>
        </div>
        <div className="popup-btns">
          <button onClick={onConfirm}>Eliminar</button>
          <button onClick={onCancel}>Cancelar</button>
        </div>
      </div>
    </>
  );
}
