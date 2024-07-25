import React, { useEffect, useState } from "react";
import "./Todo.css";

localStorage.getItem("tasks") ?? localStorage.setItem("tasks", "[]");

const Todo = (props) => {
  const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")));
  const [newTask, setNewTask] = useState({ task: "", isDone: false });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const handleAddTask = () => {
    if (newTask.task.trim() !== "") {
      setTasks([...tasks, newTask]);
      setNewTask({ task: "", isDone: false });
    }
  };

  const handleRemoveTask = (index) => {
    const newTasks = tasks.filter((task, i) => i !== index);
    setTasks(newTasks);
  };

  const handleDoneTask = (index) => {
    const newTasks = tasks.map((task, i) =>
      i === index ? { ...task, isDone: !JSON.parse(task.isDone) } : task
    );
    setTasks(newTasks);
  };

  return (
    <section {...props} className="todo-section">
      <div className="todo-list-form">
        <h1>To-Do List</h1>
        <input
          type="text"
          value={newTask.task}
          onChange={(e) =>
            setNewTask({ task: e.target.value, isDone: "false" })
          }
          placeholder="Enter a new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
      <div className="todo-lists">
        <ol>
          {tasks.map((task, index) => (
            <li key={index}>
              <b
                style={{
                  textDecoration: task.isDone == true ? "line-through" : "none",
                }}
              >
                {index + ". " + task.task}
              </b>
              <div>
                <button onClick={() => handleDoneTask(index)}>
                  {task.isDone == true ? "Undo" : "Done"}
                </button>
                <button onClick={() => handleRemoveTask(index)}>Remove</button>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
};

export default Todo;
