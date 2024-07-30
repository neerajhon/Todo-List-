// src/components/TaskForm.js
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 20px;
  padding: 20px;
  background-color: lightpink;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  margin: 10px 0;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 16px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 10px;

  &:hover {
    background-color: #005bb5;
  }
`;

const TaskForm = ({ addTask, editTask, taskToEdit, clearEdit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDescription(taskToEdit.description);
    } else {
      setTitle('');
      setDescription('');
    }
  }, [taskToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskToEdit) {
      editTask({ ...taskToEdit, title, description });
    } else {
      const newTask = {
        id: uuidv4(),
        title,
        description,
        completed: false,
        timestamp: new Date().toISOString(),
      };
      addTask(newTask);
    }
    setTitle('');
    setDescription('');
    clearEdit();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Task Title"
        required
      />
      <Input
        type="text"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Task Description"
        required
      />
      <Button type="submit">{taskToEdit ? 'Update Task' : 'Add Task'}</Button>
      {taskToEdit && (
        <Button type="button" onClick={clearEdit} style={{ backgroundColor: '#f00', marginTop: '10px' }}>
          Cancel Edit
        </Button>
      )}
    </Form>
  );
};

export default TaskForm;
