# Task Manager Web Application

This is a simple web application for managing tasks. Users can create, view, update, and delete tasks through the user interface.

## Approach

This application uses the file system to store task data. Each task submission from the user creates a new text file (`enteredtasktitle.txt`) inside the `tasks` folder. The content of the file is the entered task description. When a task is deleted, its corresponding text file is removed from the `tasks` folder.

## Features

- **Create Task:** Users can add new tasks by providing a title and details.
- **View Task:** Users can view the details of each task.
- **Update Task:** Users can edit the details of existing tasks.
- **Delete Task:** Users can remove tasks from the list.

## Technologies Used

- **Express.js:** Used as the backend framework to handle server-side logic and routing.
- **EJS (Embedded JavaScript):** Used for server-side templating to generate dynamic HTML content.
- **Node.js:** Backend JavaScript runtime environment.
- **Tailwind CSS:** Used for styling the user interface components.
- **File System (fs) Module:** Used to interact with the file system for storing task data 


## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/your-username/task-manager.git
   ```

2. **Navigate to the project directory:**

   ```bash
   cd task-manager
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the application:**

   ```bash
   npm start
   ```

5. **Open your web browser and visit** `http://localhost:3000` **to access the application.**

