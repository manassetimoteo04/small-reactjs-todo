import { TaskList } from "./TaskList";
import { SectionMenu } from "./SectionMenu";
import { SectionHeading } from "./SectionHeading";
import { FilePlus } from "react-feather";
export function AllTasks({
  onShowForm,
  allTasks,
  sorted,
  onCompleteTask,
  onDeleteTask,
  onFilter,
  filterTaskBy,
}) {
  return (
    <section>
      <SectionHeading onShowForm={onShowForm} showButton={true}>
        <h2>All Tasks</h2>
        <span>See your all Tasks</span>
      </SectionHeading>
      {allTasks.length === 0 ? (
        <EmptyList>Adicione uma Tafera</EmptyList>
      ) : (
        <>
          <SectionMenu
            allTasks={allTasks}
            onFilter={onFilter}
            filterTaskBy={filterTaskBy}
          />
          <TaskList
            allTasks={sorted}
            onCompleteTask={onCompleteTask}
            onDeleteTask={onDeleteTask}
            filterTaskBy={filterTaskBy}
          />
        </>
      )}
    </section>
  );
}

export function EmptyList({ children }) {
  return (
    <p className="empty-list">
      <FilePlus size={40} /> {children}
    </p>
  );
}
