// src/components/TaskList.js
import TaskItem from './TaskItem';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 20px;
`;

const TaskList = ({ tasks, updateTask, deleteTask, setTaskToEdit }) => {
  return (
    <List>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          updateTask={updateTask}
          deleteTask={deleteTask}
          setTaskToEdit={setTaskToEdit}
        />
      ))}
    </List>
  );
};

export default TaskList;
