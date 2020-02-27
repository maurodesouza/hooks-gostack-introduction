import React, { useState, useEffect, useMemo, useCallback } from 'react';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState([]);

  const handleSubmit = useCallback(
    e => {
      e.preventDefault();

      setTasks([...tasks, newTask]);
      setNewTask('');
    },
    [tasks, newTask]
  );

  useEffect(() => {
    const storageTasks = localStorage.getItem('tasks');

    if (storageTasks) setTasks(JSON.parse(storageTasks));
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const tasksSize = useMemo(() => {
    return tasks.length;
  }, [tasks]);

  const onDelete = index => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {tasks.map((task, index) => (
          <li key={`${task}${Math.random()}`}>
            {task}
            <button type="button" onClick={() => onDelete(index)}>
              Remover
            </button>
          </li>
        ))}
      </ul>
      <div>
        <strong>{tasksSize}</strong>
        <input
          type="text"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
        />
        <button type="submit"> Adicionar </button>
      </div>
    </form>
  );
}

export default App;
