import { useState } from "react";
import { Button } from "./Button";
import { X } from "react-feather";

export function FormNewTask({ onShowForm, onAddTask }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!title || !description || !date) return;
    const newTask = {
      id: Math.trunc(Math.random() * 234234345345 + 1),
      title,
      description,
      date,
      completed: false,
    };
    onAddTask(newTask);
    setDate("");
    setDescription("");
    setTitle("");
  }
  return (
    <>
      <div className="form-overlay"></div>
      <form className="form-new-task" onSubmit={handleSubmit}>
        <h3>
          New Task
          <span onClick={onShowForm}>
            <X width={24} />
          </span>
        </h3>
        <label>Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        ></input>
        <label>Description</label>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></input>
        <label>Date</label>
        <input
          type="date"
          placeholder="mm/dd/yyyy"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        ></input>
        <div className="set-date">
          <Button
            style={{
              width: "100%",
              display: "block",
              background: "#4a4dfc",
              color: "#fff",
            }}
          >
            Adicionar
          </Button>
        </div>
      </form>
    </>
  );
}
