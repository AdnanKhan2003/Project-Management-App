import Input from "./Input";
import { useState } from "react";

export default function Tasks({ onAddTask, onDeleteTask, tasks }) {
  const [taskName, setTask] = useState("");

  function handleAddTask(taskData) {
    setTask(taskData);
  }

  function handleClick() {
    onAddTask(taskName);
    setTask("");
  }

  return (
    <section className="mt-4">
      <div>
        <h1 className="font-bold text-2xl mb-4 ">Tasks</h1>
        <input
          type="text"
          name="task"
          className="outline-none px-2 py-1 bg-stone-200 rounded-sm mr-4"
          onChange={(e) => handleAddTask(e.target.value)}
          value={taskName}
        />
        <button onClick={handleClick}>Add Task</button>
      </div>
      <ul className="mt-8">
        {tasks.length === 0 && <p>This Project does not have any task yet.</p>}
        {tasks.length > 0 &&
          tasks.map((task) => (
            <li
              key={task.taskId}
              className="bg-stone-200 px-4 py-2 rounded-sm flex justify-between "
            >
              <span className="font-semibold">
                {task.text} {task.taskId}{" "}
              </span>
              <button
                onClick={() => onDeleteTask(task.taskId)}
                className="font-semibold hover:text-red-500 "
              >
                Clear
              </button>
            </li>
          ))}
      </ul>
    </section>
  );
}
