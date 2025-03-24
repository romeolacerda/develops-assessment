# Project Setup

## First of all, be sure that you're using Node.js version 22

## Setup Instructions

Follow these steps in the exact order:

### 1. Backend Setup

1. Go to the backend folder:
   ```sh
   cd backend
   ```
2. Clone the environment variables file:
   ```sh
   cp .env.example .env
   ```
3. Install dependencies:
   ```sh
   yarn install
   ```
4. Start the backend server:
   ```sh
   yarn start:dev
   ```

### 2. Frontend Setup

1. Open another terminal and navigate to the frontend folder:
   ```sh
   cd frontend
   ```
2. Clone the environment variables file:
   ```sh
   cp .env.example .env
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the frontend server:
   ```sh
   npm run dev
   ```

If everything goes well, you can see your app running at the port indicated in the frontend terminal.

