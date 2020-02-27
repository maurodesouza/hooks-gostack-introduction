import React, { useState, useEffect, useMemo, useCallback } from 'react';

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
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
      />
      <button type="submit"> Adicionar </button>
    </form>
  );
}

export default App;
