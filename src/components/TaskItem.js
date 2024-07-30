// src/components/TaskItem.js
import { useState } from 'react';
import styled, { css } from 'styled-components';

const ListItem = styled.li`
  margin: 10px;
  padding: 20px;
  background-color: gray;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s;

  ${({ completed }) =>
    completed &&
    css`
      background-color: #e0ffe0;
      text-decoration: line-through;
    `}
`;

const TaskHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const TaskDetails = styled.div`
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 5px 10px;
  font-size: 14px;
  margin-left: 10px;
  cursor: pointer;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;

  &:hover {
    background-color: #005bb5;
  }
`;

const TaskItem = ({ task, updateTask, deleteTask, setTaskToEdit }) => {
  const [expanded, setExpanded] = useState(false);
  const [completed, setCompleted] = useState(task.completed);

  const toggleExpanded = () => {
    setExpanded(!expanded);
  };

  const toggleCompleted = () => {
    const updatedTask = { ...task, completed: !completed };
    setCompleted(!completed);
    updateTask(updatedTask);
  };

  const handleDelete = () => {
    deleteTask(task.id);
  };

  const handleEdit = () => {
    setTaskToEdit(task);
  };

  return (
    <ListItem completed={completed}>
      <TaskHeader onClick={toggleExpanded}>
        <div>
          <strong>{task.title}</strong>
        </div>
        <div>
          <Button onClick={toggleCompleted}>{completed ? 'Undo' : 'Done'}</Button>
          <Button onClick={handleEdit} style={{ backgroundColor: '#ffa500' }}>
            Edit
          </Button>
          <Button onClick={handleDelete} style={{ backgroundColor: '#f00' }}>
            Delete
          </Button>
        </div>
      </TaskHeader>
      {expanded && (
        <TaskDetails>
          <p>{task.description}</p>
          <small>Last updated: {new Date(task.timestamp).toLocaleString()}</small>
        </TaskDetails>
      )}
    </ListItem>
  );
};

export default TaskItem;
