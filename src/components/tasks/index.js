import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io"; // Add Task Icon
import { AiOutlineDelete } from "react-icons/ai"; // Delete Task Icon
import "./index.css";

const Tasks = () => {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  const addTask = () => {
    if (taskInput.trim() === "") return;
    setTasks([...tasks, { id: Date.now(), text: taskInput, completed: false }]);
    setTaskInput("");
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleComplete = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  return (
    <div className="task-container">
      <h2>Task Tracker</h2>

      {/* Input Section */}
      <div className="input-container">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Enter a task..."
        />
        <button onClick={addTask} className="add-task-btn">
          <IoIosAddCircleOutline className="btn-icon" size={20} /> Add Task
        </button>
      </div>

      {/* Task List */}
      <ul className="task-list">
        {tasks.map((task) => (
          <li key={task.id} className={task.completed ? "completed" : ""}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <span onClick={() => toggleComplete(task.id)}>{task.text}</span>
            <button className="delete-btn" onClick={() => deleteTask(task.id)}>
              <AiOutlineDelete size={20} /> {/* Delete Task Icon */}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
