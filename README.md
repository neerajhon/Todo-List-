# Todo List Application

## Overview

The Todo List Application is a modern, interactive task management tool built with React. It provides a clean and intuitive user interface for managing tasks, including features such as creating, editing, deleting, and marking tasks as completed. The application also supports filtering tasks using URL parameters and includes stylish animations and a responsive design.

### Key Features
- **Task Management**: Add, edit, and delete tasks.
- **Completion Status**: Mark tasks as completed or pending.
- **Search Functionality**: Filter tasks using URL parameters.
- **Expandable List**: View detailed task descriptions and timestamps.
- **Stylish UI**: Modern design with animations and a gradient background.

## System Design

The application is designed with the following components and structure:

- **Components**: 
  - `Heading.js`: Displays the main heading of the application.
  - `SearchBar.js`: Allows users to search for tasks.
  - `TaskForm.js`: Form for adding and editing tasks.
  - `TaskItem.js`: Displays individual tasks with options to mark as done or delete.
  - `TaskList.js`: Lists all tasks and supports filtering based on search query.

- **Styles**:
  - `globalStyles.js`: Contains global styling, including background settings and animations.

- **Data**:
  - `tasks.json`: A dummy JSON file used as a data repository for initial task data.

- **Routing**:
  - Uses `react-router-dom` for handling routing and URL parameters.

## Implementation

### Technologies Used
- **React**: JavaScript library for building user interfaces.
- **Styled-components**: For CSS-in-JS styling.
- **react-router-dom**: For routing and URL parameter handling.

### File Structure

- **`src/`** - Main source code directory.
  - **`components/`** - Contains React components for the application.
    - `Heading.js` - Stylish heading component.
    - `SearchBar.js` - Component for searching tasks.
    - `TaskForm.js` - Form for adding and editing tasks.
    - `TaskItem.js` - Component for displaying individual tasks.
    - `TaskList.js` - Component for listing all tasks.
  - **`styles/`** - Contains global styles.
    - `globalStyles.js` - Global styles and background settings.
  - **`data/`** - Contains dummy data.
    - `tasks.json` - Dummy JSON file for task data.
  - `App.js` - Main application component.
  - `index.js` - Entry point for the React application.

## Setup and Running the Application

### Prerequisites
- **Node.js**: Make sure you have Node.js and npm installed. You can download them from [nodejs.org](https://nodejs.org/).

### Installation

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/neerajhon/todo-list-app.git

2. **Navigate to the Project Directory:**:
   ```bash
   cd todo-list-app

3. **Install Dependencies:**:
   ```bash
   npm install

4. **Running the Application**:
   ```bash
   npm start
- Open your browser and navigate to http://localhost:3000 to see the app in action.

5. **Building**:
   ```bash
   npm run build
- The build output will be located in the build directory, which can be deployed to a web server.
 
