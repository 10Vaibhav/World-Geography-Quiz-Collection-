# World Geography Quiz Collection 🌍

A collection of interactive web-based geography quizzes built with Node.js, Express, and PostgreSQL. This repository contains multiple educational quizzes designed to test and improve users' knowledge of world geography.

## Quizzes

### 1. Flag Quiz 🎌
Test your knowledge of world flags! This application presents users with flag images and challenges them to identify the corresponding countries.

[View Flag Quiz Details](./flag-quiz/README.md)

Key Features:
- Random flag questions
- Score tracking
- Real-time feedback
- Secure database configuration

### 2. World Capital Quiz 🏛️
Test your knowledge of world capitals by matching countries with their capital cities.

[View World Capital Quiz Details](./world-capital-quiz/README.md)

Key Features:
- Random capital city questions
- Real-time score tracking
- Case-insensitive answer validation
- Clean user interface

## Repository Structure
```
world-geography-quizzes/
├── flag-quiz/              # Flag Quiz
│   ├── public/
│   ├── views/
│   ├── index.js
│   ├── .env
│   └── README.md
│
├── world-capital-quiz/     # World Capital Quiz
│   ├── public/
│   ├── views/
│   ├── index.js
│   ├── .env
│   └── README.md
│
└── README.md              # Main repository README
```

## Common Prerequisites

Both quizzes require:
- Node.js (v12 or higher)
- PostgreSQL
- npm (Node Package Manager)

## Quick Start

1. Choose a quiz to run:
```bash
# For Flag Quiz
cd flag-quiz
npm install
node index.js

# For World Capital Quiz
cd world-capital-quiz
npm install
node index.js
```

2. Set up environment variables:
- Create a `.env` file in each quiz directory
- Follow the quiz-specific README for environment variable configuration

## Database Setup

Each quiz requires its own PostgreSQL database. Refer to individual quiz READMEs for specific database schema and setup instructions.

## Technology Stack

- Backend: Node.js with Express
- Database: PostgreSQL
- Template Engine: EJS
- Environment Management: dotenv
- Request Parsing: body-parser
