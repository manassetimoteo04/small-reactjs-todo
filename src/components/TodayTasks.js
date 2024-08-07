import { useState } from "react";
import { SectionHeading } from "./SectionHeading";
import { SectionMenu } from "./SectionMenu";
import { TaskList } from "./TaskList";
import { EmptyList } from "./AllTasks";

export function TodayTasks({
  allTasks,
  onCompleteTask,
  onDeleteTask,
  onShowForm,
}) {
  const [date, setDate] = useState(new Date());
  const todayTasks = allTasks.filter(
    (task) => new Date(task.date).getDate() === date.getDate()
  );

  const [filterTaksBy, setFilterTasksBy] = useState("All");
  let sorted = todayTasks
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (filterTaksBy === "Completed") {
    sorted = sorted.filter((task) => task.completed);
  }
  if (filterTaksBy === "Uncompleted") {
    sorted = sorted.filter((task) => !task.completed);
  }
  if (filterTaksBy === "All") {
    sorted = todayTasks
      .slice()
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }
  function handleFilter(by) {
    setFilterTasksBy(by);
  }
  return (
    <section>
      <SectionHeading onShowForm={onShowForm} showButton={true}>
        <h2>Today's Task</h2>
        <span>
          {date.toDateString()} - {date.toLocaleTimeString().slice(0, 5)}
        </span>
      </SectionHeading>
      {todayTasks.length > 0 ? (
        <>
          {" "}
          <SectionMenu
            allTasks={todayTasks}
            onFilter={handleFilter}
            filterTaskBy={filterTaksBy}
          />
          <TaskList
            allTasks={sorted}
            onCompleteTask={onCompleteTask}
            onDeleteTask={onDeleteTask}
            filterTaskBy={filterTaksBy}
          />
        </>
      ) : (
        <EmptyList>Sem tarefas para hoje</EmptyList>
      )}
    </section>
  );
}
