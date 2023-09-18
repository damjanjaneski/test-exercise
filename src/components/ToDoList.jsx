import { useState } from "react";

export default function ToDoList() {
  const [task, setTask] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleTask = function (e) {
    setTaskText(e.target.value);
  };

  const addTask = function () {
    if (taskText.trim() === "") return;

    const newTask = {
      id: Date.now(),
      text: taskText,
      completed: false,
    };

    setTask([...task, newTask]);

    setTaskText("");
  };

  const removeTask = function (taskId) {
    const deletedObject = task.filter((t) => t.id !== taskId);
    setTask(deletedObject);
  };

  const taskDone = function (taskId) {
    const completedTask = task.map((t) =>
      t.id === taskId ? { ...t, completed: !t.completed } : t
    );
    setTask(completedTask);
  };

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder="Add task"
          value={taskText}
          onChange={handleTask}
        />
      </div>

      <button onClick={addTask}>Add Task</button>

      <ul>
        {task.map((t) => (
          <li key={task.id}>
            <input type="checkbox" onChange={() => taskDone(t.id)} />
            <span
              style={{ textDecoration: t.completed ? "line-through" : "none" }}
            >
              {t.text}
            </span>
            <button
              onClick={() => {
                removeTask(t.id);
              }}
            >
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
