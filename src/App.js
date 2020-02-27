import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newtask, setNewTask] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();

    setTasks([...tasks, newtask]);
    setNewTask('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <ul>
        {tasks.map(task => (
          <li key={`${task}${Math.random()}`}>{task}</li>
        ))}
      </ul>
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
