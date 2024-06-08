import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import cn from "./style.module.scss"

const TodoList = ({ tasks, onToggleTask, onEditTask, onDeleteTask }) => {
  return (
    <ul className={cn["ul"]}>
      {tasks.map((task) => (
        <TodoItem
          key={task.id}
          task={task}
          onToggleTask={onToggleTask}
          onEditTask={onEditTask}
          onDeleteTask={onDeleteTask}
        />
      ))}
    </ul>
  );
};

export default TodoList;
