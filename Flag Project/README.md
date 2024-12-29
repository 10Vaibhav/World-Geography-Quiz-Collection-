# Flag Quiz Game

A web-based quiz application that tests users' knowledge of country flags using Node.js, Express, and PostgreSQL with secure environment variable configuration.

## Description

This application presents users with flag images and asks them to identify the corresponding country names. It features secure database configuration using environment variables, score tracking, and immediate feedback on user responses.

## Features

- Random flag presentation
- Score tracking
- Real-time feedback on answers
- Secure PostgreSQL database integration using environment variables
- Responsive web interface


## Installation

1. Clone the repository:
```bash
git clone <your-repository-url>
cd flag-quiz
```

2. Install dependencies:
```bash
npm install express body-parser pg dotenv ejs
```

3. Create a `.env` file in the root directory with the following variables:
```env
user=your_postgres_user
host=your_host
database=your_database_name
password=your_database_password
port=your_database_port
```

4. Set up the PostgreSQL database:
- Create a database with the name specified in your `.env` file
- Create a table named "flags" with appropriate columns (name, flag_url, etc.)

## Project Structure

```
flag-quiz/
├── public/           # Static files
├── views/            # EJS templates
│   └── index.ejs
├── .env             # Environment variables (do not commit)
├── .gitignore       # Git ignore file
├── package.json
└── index.js         # Main application file
```

## Running the Application

1. Make sure your environment variables are properly set in the `.env` file

2. Start the server:
```bash
node index.js
```

3. Access the application in your web browser:
```
http://localhost:3000
```

## API Endpoints

- `GET /`: Displays the main quiz page with a random flag
- `POST /submit`: Processes user answers and updates the score

## Dependencies

- express: Web application framework
- body-parser: Request body parsing middleware
- pg: PostgreSQL client for Node.js
- dotenv: Environment variable management
- ejs: Template engine

## Security Notes

- The `.env` file contains sensitive information and should never be committed to version control
- Add `.env` to your `.gitignore` file
- Use different credentials for development and production environments
- Consider using connection pooling for better database performance in production

## Environment Variables

Required environment variables:
```
user      - PostgreSQL username
host      - Database host address
database  - Database name
password  - Database password
port      - Database port number
```



