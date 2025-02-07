# microservicio-logistic-login-validation

# Login Validation Microservice
This microservice is developed in Node.js and is responsible for validating credentials for user authentication on the logistics platform.

## 📂 Project Structure
- src/config/mysql.js: Connection configuration with MySQL.
- src/config/postgres.js: Connection configuration with PostgreSQL.
- src/controllers/authController.js: Controller that handles authentication and validation of credentials.
- src/repository/repository.js: Persistence layer for user validation.
- src/routes/authRoutes.js: Definition of routes for authentication.
- src/services/authService.js: Business logic related to authentication and validation.
- src/utils/jwtUtil.js: Utility to handle the generation and validation of JWT tokens.
- src/app.js: Main entry point of the microservice.
- Dockerfile: Configuration to run the microservice in a Docker container.
- package.json: Project dependencies and configuration.

## 🛠 Requirements
- Node.js 16+.
- npm or yarn.
- MySQL/PostgreSQL (Database - configurable in config).
- Docker (Optional, for containerized execution).

## 🚀 Installation
Clone the repository:
```bash
git clone https://github.com/kevinseya/microservicio-logistic-login-validation.git
```
Navigate to the project folder:
```bash
cd microservicio-logistic-login-validation
```
Install dependencies:
```bash
npm install
```
Set environment variables:

Create a .env file in the root with the following information:
```bash
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=logistic_db
JWT_SECRET=your_secret_key
```
Start the server:
```bash
npm start
```
The application will run on http://localhost:3000.

📌 Response Codes
200 OK: Authentication successful.
400 Bad Request: Incorrect or missing credentials.
500 Internal Server Error: Error on the server



