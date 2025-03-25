# Kanban Board with JWT Authentication

This project is a full-stack Kanban board application that uses JSON Web Tokens (JWTs) to secure user authentication. The application allows users to log in, manage tasks, and ensures that only authenticated users can access the board.

## Deployment and Github Link

🔗 TODO: Deployed Application URL

🔗 TODO: Live Application URL

## Screenshots

TODO: Login Page

TODO: Main Kanban Board

## Features

- ✅ Secure login with username and password
- ✅ JWT-based authentication for API requests
- ✅ Task management with Kanban board interface
- ✅ Auto-logout after session expiration
- ✅ Error messages for incorrect credentials
- ✅ Logout functionality with token removal

## Installation

1. Clone the Repository

git clone https://github.com/your-username/your-kanban-board.git
cd your-kanban-board

2. Install Dependencies

Run `npm i` in the `Develop` directory to install all dependencies for the server and client.

3. Configure Environment Variables

Create a .env file in the server directory with the following:

    DB_USERNAME=<your-db-username>
    DB_PASSWORD=<your-db-password>
    JWT_SECRET=<your-secret-key>

4. Run the Application

## To Start the App

In the `Develop` directory, run `npm run start:dev`

## Usage

    Open the application in your browser.

    Sign in using your credentials.

    Manage your tasks using the Kanban board.

## API Routes

### Authentication Routes

    POST /api/login - Authenticate user and return JWT

    POST /api/logout - Invalidate JWT

### Task Routes

    GET /api/tasks - Get all tasks

    POST /api/tasks - Add a new task

    PUT /api/tasks/:id - Update a task

    DELETE /api/tasks/:id - Delete a task

## Deployment Instructions

To deploy the application:

    Push your code to GitHub.

    Deploy the application to Render.

    Add environment variables to the Render dashboard.

## Bonus Features

- ✅ Task sorting and filtering for easier task management
  Contributing

<br/>

###### "This README was initially created by an LLM and corrected by a human. <3 Have fun with the kanban board!" \- ike
