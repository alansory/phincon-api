# Phincon API

This project is a REST API for managing Pokémon data. It includes endpoints for listing, retrieving, catching, releasing, and renaming Pokémon.

## Prerequisites

- Node.js (v16.x or later)
- Prisma Client
- Express
- winston
- PostgreSQL/MySQL or your preferred database

## Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/alansory/phincon-api.git
   cd phincon-api
   ```
2. **Install dependencies:**

    ```bash
    npm install
    ```
3. **Configure your database:**
   
    - Copy the example environment file to create your .env file: <br/><br/>

    ```bash
    cp env-example .env
    ```

    - Update the DATABASE_URL in the .env file with your database connection string. <br/><br/>

    ```bash
    DATABASE_URL="mysql://root:secret@localhost:3306/pokemon"
    ```

4. **Run database migrations:**
   
    ```bash
    npx prisma migrate dev
    ```

5. **Seed data to the database:**

    ```bash
    npm run seed
    ```

6. **Running the API:**
  
    - To start the server, use: <br/><br/>

    ```bash
    npm start
    ```

