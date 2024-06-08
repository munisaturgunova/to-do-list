import React, { useState } from 'react';
import cn from "./style.module.scss"
const TodoItem = ({ task, onEditTask, onDeleteTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);

  const handleStartEdit = () => {
    setIsEditing(true);
  };

  const handleEditInputChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSaveEdit();
    }
  };

  const handleSaveEdit = () => {
    onEditTask(task.id, editedText);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedText(task.text);
    setIsEditing(false);
  };

  const handleDeleteTask = () => {
    onDeleteTask(task.id);
  };

  return (
    <li>
      {isEditing ? (
        <div className={cn["checked"]}>
          <input
            type="text"
            value={editedText}
            onChange={handleEditInputChange}
            onKeyDown={handleKeyDown}
          />
          <button className={cn["edit"]} onClick={handleSaveEdit}>Save</button>
          <button className={cn["delit"]} onClick={handleCancelEdit}>Cencal</button>
        </div>
      ) : (
        <div className={cn["div"]}> 
          <span>{task.text}</span>
          <button className={cn["edit"]} onClick={handleStartEdit}>Edit</button>
          <button className={cn["delit"]} onClick={handleDeleteTask}>Delete</button>
        </div>
      )}  <br /> <br /> <br /> <br />
    </li>
  );
};

export default TodoItem;
