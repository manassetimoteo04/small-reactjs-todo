import { Calendar, Circle, Trash2, CheckCircle } from "react-feather";

export function TaskBox({ task, onCompleteTask, onDeleteTask }) {
  const newDate = new Date(task.date);
  const date =
    newDate.getDate() === new Date().getDate()
      ? "hoje"
      : newDate.toDateString();

  return (
    <div className="task-box">
      <div className="flex-task">
        <div>
          <h3 style={task.completed ? { textDecoration: "line-through" } : {}}>
            {task.title}
          </h3>
          <p>
            {task.description.length > 30
              ? task.description.slice(0, 30) + "..."
              : task.description}
          </p>
        </div>
        <button className="toggle-btn" onClick={() => onCompleteTask(task.id)}>
          {task.completed ? (
            <CheckCircle size={28} color="#4a4dfc" />
          ) : (
            <Circle size={28} color="#dee2e6" />
          )}
        </button>
      </div>
      <div className="task-footer">
        <div>
          <p>
            <Calendar size={14} />
            <strong>{date}</strong>
          </p>
        </div>
        <div className="task-action">
          <button className="btn" onClick={() => onDeleteTask(task.id)}>
            <Trash2 size={20} color="#d00000" />
          </button>
        </div>
      </div>
    </div>
  );
}
