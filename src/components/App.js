import { Header } from "./Header";
import { AllTasks } from "./AllTasks";
import { FormNewTask } from "./FormNewTask";
import { TodayTasks } from "./TodayTasks";
import { AlertPopup } from "./AlertPopup";
import { useState } from "react";
import { Notification } from "./Notification";

const tasks = [
  {
    id: 1,
    title: "Comprar mantimentos",
    description: "Comprar frutas, vegetais e leite no supermercado.",
    date: "2024-08-10",
    completed: false,
  },
  {
    id: 2,
    title: "Reunião de projeto",
    description: "Participar da reunião de status do projeto às 10h.",
    date: "2024-08-07",
    completed: true,
  },
  {
    id: 3,
    title: "Enviar relatório",
    description: "Enviar o relatório de vendas do mês para o gerente.",
    date: "2024-08-07",
    completed: false,
  },
  {
    id: 4,
    title: "Consulta médica",
    description: "Consulta de rotina com o médico às 14h.",
    date: "2024-08-05",
    completed: false,
  },
  {
    id: 5,
    title: "Pagar contas",
    description: "Pagar a conta de luz e de internet.",
    date: "2024-08-10",
    completed: true,
  },
];

export default function App() {
  const [activeSection, setActiveSection] = useState("Today's Task");
  const [allTasks, setAllTasks] = useState(tasks);
  const [showAddForm, setShowAddForm] = useState(false);
  const [showPopUp, setShowPoup] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
  const [filterTaksBy, setFilterTasksBy] = useState("All");
  let sorted = allTasks
    .slice()
    .sort((a, b) => new Date(a.date) - new Date(b.date));

  if (filterTaksBy === "Completed") {
    sorted = sorted.filter((task) => task.completed);
  }
  if (filterTaksBy === "Uncompleted") {
    sorted = sorted.filter((task) => !task.completed);
  }
  if (filterTaksBy === "All") {
    sorted = allTasks
      .slice()
      .sort((a, b) => new Date(a.date) - new Date(b.date));
  }

  function handlActiveSection(active) {
    setActiveSection(active);
  }
  function handleShowForm() {
    setShowAddForm((show) => !show);
  }
  function handleAddTask(newTask) {
    setAllTasks((tasks) => [...tasks, newTask]);
    handleShowForm();
  }
  function handleSelectId(id) {
    setSelectedId(id);
    handleShowPoup();
  }

  function handleCompleteTask(id) {
    setAllTasks((tasks) =>
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
  function handleDeleteTask(id) {
    setAllTasks((tasks) => tasks.filter((task) => task.id !== selectedId));
    handleShowPoup();
  }
  function handleShowPoup() {
    setShowPoup((show) => !show);
  }

  function handleFilter(by) {
    setFilterTasksBy(by);
  }
  return (
    <div className="App">
      <Header
        onActive={handlActiveSection}
        activeSection={activeSection}
      ></Header>
      {activeSection === "All Tasks" && (
        <AllTasks
          onShowForm={handleShowForm}
          allTasks={allTasks}
          sorted={sorted}
          onCompleteTask={handleCompleteTask}
          onDeleteTask={handleSelectId}
          onFilter={handleFilter}
          filterTaskBy={filterTaksBy}
        />
      )}
      {activeSection === "Today's Task" && (
        <TodayTasks
          onShowForm={handleShowForm}
          allTasks={allTasks}
          sorted={sorted}
          onCompleteTask={handleCompleteTask}
          onDeleteTask={handleSelectId}
        />
      )}
      {activeSection === "Notification" && (
        <Notification allTasks={allTasks.filter((n) => !n.completed)} />
      )}
      {showAddForm && (
        <FormNewTask onShowForm={handleShowForm} onAddTask={handleAddTask} />
      )}
      {showPopUp && (
        <AlertPopup onConfirm={handleDeleteTask} onCancel={handleShowPoup} />
      )}
    </div>
  );
}
