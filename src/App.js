import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    setTasks([...tasks, newtask]);
    setNewTask('');
  };

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

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {tasks.map(task => (
          <li key={`${task}${Math.random()}`}>{task}</li>
        ))}
      </ul>
      <strong>{tasksSize}</strong>
      <br />
      <input
        type="text"
        value={newtask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button type="submit"> Adicionar </button>
    </form>
  );
}

export default App;
