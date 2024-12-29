# World Capital Quiz

A web-based quiz application that tests users' knowledge of world capitals. Built with Node.js, Express, and PostgreSQL.

## Features

- Random capital city questions
- Real-time score tracking
- Case-insensitive answer validation
- PostgreSQL database integration for storing capital data
- Clean and simple user interface

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the root directory with your PostgreSQL credentials:
```
user=your_username
host=your_host
database=your_database_name
password=your_password
port=your_port
```

4. Set up the PostgreSQL database:
   - Create a database
   - Create a table named `capitals` with columns for country and capital

## Database Schema

The `capitals` table should have the following structure:
```sql
CREATE TABLE capitals (
    id SERIAL PRIMARY KEY,
    country VARCHAR(100),
    capital VARCHAR(100)
);
```

## Running the Application

1. Start the server:
```bash
node index.js
```

2. Open your browser and navigate to:
```
http://localhost:3000
```

## Project Structure

- `index.js` - Main application file containing server logic
- `public/` - Static files directory
- `views/` - Contains EJS templates
- `.env` - Environment variables configuration
- `package.json` - Project dependencies and scripts

## Dependencies

- express - Web application framework
- body-parser - Request body parsing middleware
- pg - PostgreSQL client for Node.js
- dotenv - Environment variables management
- ejs - Template engine

