
# NoteApp

**NoteApp** is a simple note-taking application developed using **Spring Boot** for the backend and **React** for the frontend. The application allows users to create, update, delete, and view notes.

## Features

- **Add Notes:** Users can add a note with a title and content.
- **View Notes:** All notes can be viewed on the main page.
- **Update Notes:** Existing notes can be updated by clicking the update button.
- **Delete Notes:** Unwanted notes can be deleted by clicking the delete button.
- **Real-time Data:** All actions (Add, Update, Delete) reflect immediately without page reload, utilizing React's state management.

## Technologies Used

### Backend:
- **Spring Boot** (Java)
  - RESTful APIs to handle the note operations.
  - **Spring Data JPA** for data access.
  - **H2/SQLite/MySQL** (can be configured) as the database.
  
### Frontend:
- **React.js**
  - Used for rendering the UI and managing application state.
  - **Axios** for handling API requests.

## Getting Started

### Prerequisites
- **Java 11+** installed
- **Node.js** and **npm** installed
- **Git** installed

### Backend Setup (Spring Boot)
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/NoteApp.git
   ```
2. Navigate to the backend directory:
   ```bash
   cd NoteApp/backend
   ```
3. Build and run the backend:
   ```bash
   ./mvnw spring-boot:run
   ```

### Frontend Setup (React)
1. Navigate to the frontend directory:
   ```bash
   cd NoteApp/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm start
   ```

### API Endpoints

The following endpoints are available in the application:

| Method | Endpoint             | Description              |
|--------|----------------------|--------------------------|
| GET    | `/api/notes`          | Get all notes            |
| GET    | `/api/notes/{id}`     | Get a specific note by ID|
| POST   | `/api/notes`          | Add a new note           |
| PUT    | `/api/notes/{id}`     | Update an existing note  |
| DELETE | `/api/notes/{id}`     | Delete a note by ID      |

### Usage

1. Open your browser and navigate to `http://localhost:5173`.
2. You can add new notes, update or delete existing notes directly from the interface.

## Project Structure

```bash
NoteApp/
├── backend/
│   ├── src/main/java/com/emak/NoteApp/
│   ├── src/main/resources/
│   ├── pom.xml
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
```

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
