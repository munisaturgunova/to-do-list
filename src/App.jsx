import React, { useState, useEffect } from 'react';
import TodoInput from './components/InputField/InputField';
import TodoList from './components/TodoList/TodoList';
import "./App.css"



function App (){
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // Загрузка данных из localStorage при загрузке компонента
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  const handleAddTask = (newTaskText) => {
    const newTaskObj = { id: Date.now(), text: newTaskText, completed: false };
    setTasks([...tasks, newTaskObj]);
    // Сохранение данных в localStorage
    localStorage.setItem('tasks', JSON.stringify([...tasks, newTaskObj]));
  };

  const handleToggleTask = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
    // Сохранение данных в localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleEditTask = (id, newText) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, text: newText } : task
    );
    setTasks(updatedTasks);
    // Сохранение данных в localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };

  const handleDeleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    // Сохранение данных в localStorage
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
  };
  
  

  return (
    <div>
      <h1>To-Do List</h1>
      <TodoInput onAddTask={handleAddTask} />
      <TodoList
        tasks={tasks}
        onToggleTask={handleToggleTask}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}

export default App;
