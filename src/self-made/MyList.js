import { useEffect, useState } from "react";

export default function MyList() {
  const [tasks, setTasks] = useState([]);
  const [taskText, setTaskText] = useState("");
  const [editText, setEditText] = useState("");

  const handleText = (e) => {
    setTaskText(e.target.value);
  };

  const addTask = () => {
    if (taskText.trim() === "") return;

    const newTask = {
      text: taskText,
      completed: false,
      edit: false,
    };

    setTasks([...tasks, newTask]);
    setTaskText("");
  };

  const removeTask = (e) => {
    const index = e.target.id;
    tasks.splice(index, 1);
    setTasks([...tasks]);
  };

  const editTask = (e) => {
    const index = e.target.id;
    tasks[index].edit = true;
    setTasks([...tasks]);
  };

  const edited = (e) => {
    const index = e.target.id;
    tasks[index].edit = false;
    tasks[index].text = editText;
    setTasks([...tasks]);
  };

  const handleEdit = (e) => {
    setEditText(e.target.value);
  };

  return (
    <div className="classic" style={{ marginTop: "20px" }}>
      <input
        style={{ textAlign: "center" }}
        type="text"
        value={taskText}
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
              <button id={x} onClick={(e) => editTask(e)}>
                Edit task
              </button>
              {task.edit ? (
                <div>
                  <input
                    onChange={(e) => {
                      handleEdit(e);
                    }}
                    name="edit"
                    type="text"
                    value={editText}
                  ></input>
                  <button
                    id={x}
                    onClick={(e) => {
                      edited(e);
                    }}
                  >
                    Ok
                  </button>
                </div>
              ) : (
                ""
              )}
            </li>
          </div>
        );
      })}
    </div>
  );
}
