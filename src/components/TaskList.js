import { EmptyList } from "./AllTasks";
import { TaskBox } from "./TaskBox";
export function TaskList({
  allTasks,
  onCompleteTask,
  onDeleteTask,
  filterTaskBy,
}) {
  if (filterTaskBy === "Completed" && allTasks.length === 0)
    return <EmptyList>Nenhuma Tafera Completada</EmptyList>;

  if (filterTaskBy === "Uncompleted" && allTasks.length === 0)
    return <EmptyList>Todas as Taferas completadas</EmptyList>;

  return (
    <div className="task-list">
      {allTasks.map((task) => {
        return (
          <TaskBox
            task={task}
            onCompleteTask={onCompleteTask}
            onDeleteTask={onDeleteTask}
            key={task.id}
          />
        );
      })}
    </div>
  );
}
