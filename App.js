import React, { useState } from 'react';

function App() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, newTask]);
      setNewTask('');
    }
  };

  const handleRemoveTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1>Tehtävälista</h1>
      <div>
        <input
          type="text"
          placeholder="Lisää uusi tehtävä"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button onClick={handleAddTask}>Lisää</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task} <button onClick={() => handleRemoveTask(index)}>Poista</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
