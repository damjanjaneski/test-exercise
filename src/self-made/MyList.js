import { useEffect, useState } from "react";

export default function MyList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");

  const handleText = (e) => {
    setTaskText(e.target.value);
  };

  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      text: taskText,
      completed: false,
    };

    setTasks([...tasks, newTask]);
  };

  const removeTask = (e) => {
    const index = e.target.id;
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  return (
    <div className="classic">
      <input
        style={{ textAlign: "center" }}
        type="text"
        onChange={handleText}
      />
      <button onClick={addTask}>Add task</button>
      {tasks.map((task, x) => {
        return (
          <div style={{ display: "flex", flexDirection: "row" }} key={x}>
            <li>
              <input type="checkbox" defaultChecked={task.completed} />
              <span>{task.text}</span>
              <button
                id={x}
                onClick={(e) => {
                  removeTask(e);
                }}
              >
                Remove
              </button>
            </li>
          </div>
        );
      })}
    </div>
  );
}
