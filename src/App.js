// src/App.js
import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import GlobalStyle from './styles/globalStyles';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import SearchBar from './components/SearchBar';
import Heading from './components/Heading'; // Import the Heading component
import tasksData from './data/tasks.json';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [taskToEdit, setTaskToEdit] = useState(null);
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const navigate = useNavigate();
  const searchTerm = query.get('search') || '';

  useEffect(() => {
    setTasks(tasksData);
  }, []);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  const updateTask = (updatedTask) => {
    setTasks(tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task)));
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const filteredTasks = tasks.filter((task) =>
    task.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const setSearchTerm = (term) => {
    navigate(`/?search=${term}`);
  };

  const clearEdit = () => {
    setTaskToEdit(null);
  };

  return (
    <>
      <GlobalStyle />
      <Heading /> {/* Add the Heading component */}
      <SearchBar setSearchTerm={setSearchTerm} searchTerm={searchTerm} />
      <TaskForm addTask={addTask} editTask={updateTask} taskToEdit={taskToEdit} clearEdit={clearEdit} />
      <TaskList
        tasks={filteredTasks}
        updateTask={updateTask}
        deleteTask={deleteTask}
        setTaskToEdit={setTaskToEdit}
      />
    </>
  );
};

export default App;
