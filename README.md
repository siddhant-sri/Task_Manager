# Task Manager Application

This project is a task manager application that allows users to register, log in, and perform CRUD (Create, Read, Update, Delete) operations on tasks. It consists of both frontend and backend components developed using React.js for the frontend and Node.js with Express.js for the backend.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Screenshots](#screenshots)

## Features

- User registration and login
- Secure user authentication using JSON Web Tokens (JWT)
- CRUD operations on tasks (Create, Read, Update, Delete)
- Responsive and user-friendly frontend interface
- Proper error handling and validation
- Integration with backend APIs for data retrieval and manipulation
- Clean and well-structured code following best practices
- Robust security measures including input validation and password hashing

## Technologies Used

- **Frontend**: React.js, HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: [Choose your database system here, e.g., MongoDB, PostgreSQL]
- **Authentication**: JSON Web Tokens (JWT)
- **Deployment**: [Deployment platform, e.g., Heroku, AWS, DigitalOcean]

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/task-manager.git
   ```

2. Navigate to the project directory:

   ```bash
   cd task-manager
   ```

3. Install dependencies for both frontend and backend:

   ```bash
   # Install backend dependencies
   cd backend
   npm install

   # Install frontend dependencies
   cd ../frontend
   npm install
   ```

4. Set up the database and configure the connection in the backend.

## Usage

1. Start the backend server:

   ```bash
   cd backend
   npm start
   ```

2. Start the frontend development server:

   ```bash
   cd frontend
   npm start
   ```

3. Open your browser and go to `http://localhost:3000` to access the application.

## API Endpoints

- **POST /registration**: Register a new user.
- **POST /login**: Log in an existing user.
- **GET /tasks**: Get all tasks for the user.
- **PUT /tasks**: Update the tasks.
- **POST /tasks**: Create the task for the user.
- **DELETE /tasks**: Delete the task.



## Additional Information

### Demo Video

A short demo video showcasing the functionality of the application can be found [here](https://www.awesomescreenshot.com/video/27554514?key=74f57812a5634038a03c5fa9fc1bf009).

### Project Structure

The project follows a modular structure with separate directories for the frontend and backend components:

- `frontend`: Contains all frontend code written in React.js.
- `backend`: Contains all backend code written in Node.js with Express.js.

### Dependencies

Dependencies for both frontend and backend are listed in their respective `package.json` files. Ensure you have Node.js installed on your machine to run the project.

### Screenshots
![image](https://github.com/siddhant-sri/w3Villa_Task_Manager/assets/63922624/fb94913e-b84f-44b8-b8e8-09d89ac49301)

![image](https://github.com/siddhant-sri/w3Villa_Task_Manager/assets/63922624/17228c57-08ac-4637-93af-cc6a99d6a6fe)


