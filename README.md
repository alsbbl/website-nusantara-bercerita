# Nusantara Bercerita

### Preserving Indonesian Cultural Heritage Through Digital Storytelling

## Overview

Nusantara Bercerita is a web application project designed to introduce and preserve Indonesian cultural heritage through digital storytelling.

The platform provides a collection of Indonesian folklore and legends from different regions across the archipelago. Users can explore cultural stories, create personal accounts, manage their profiles, and save their favorite stories.

The project combines web development and backend technologies to support digital cultural preservation and provide an accessible storytelling experience.

## Project Objectives

- Digitize Indonesian folklore and traditional stories.
- Introduce cultural heritage from different Indonesian provinces.
- Provide an accessible platform for discovering regional legends.
- Implement user authentication and profile management.
- Enable users to save and manage favorite stories.
- Support cultural education through digital technology.

## Key Features

### 1. Indonesian Folklore Collection
- Display a collection of Indonesian folklore and legends.
- Organize stories based on provinces and story types.
- Provide individual story details and content.
- Store story information in structured JSON format.

### 2. User Authentication
- User registration with full name, email, and password.
- Secure password hashing using bcrypt.
- User login with credential verification.
- JSON Web Token (JWT) authentication.
- Token-based access to protected endpoints.

### 3. User Profile Management
- Retrieve user profile information.
- Update personal information.
- Change account passwords.

### 4. Favorite Stories
- Add stories to a personal favorites list.
- Check favorite status for individual stories.
- Remove stories from favorites.
- Retrieve all saved favorite stories.

## Technology Stack

| Technology | Purpose |
|---|---|
| JavaScript | Backend programming language |
| Node.js | JavaScript runtime environment |
| Express.js | Backend web framework |
| JSON Web Token | User authentication |
| bcrypt | Password hashing |
| CORS | Cross-Origin Resource Sharing |
| JSON | Data storage and management |
| npm | Package management |

## System Architecture

The backend follows a REST API architecture.

The application processes client requests through Express.js endpoints, validates authentication when required, and retrieves or updates data stored in JSON files.

**Main Components:**

1. Client Application: Sends HTTP requests to the backend.
2. Express Server: Handles API requests and responses.
3. Authentication Middleware: Verifies JWT tokens.
4. User Data: Stores user accounts and favorite story information.
5. Story Data: Stores Indonesian folklore and legend content.

## API Endpoints

### Authentication

| Method | Endpoint | Description |
|---|---|---|
| POST | `/register` | Register a new user |
| POST | `/login` | Authenticate an existing user |

### Stories

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/stories/:id` | Retrieve a story by ID |

### User Profile

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/profile` | Retrieve authenticated user profile |
| PUT | `/api/profile` | Update user profile |
| PUT | `/api/password` | Change account password |

### Favorite Stories

| Method | Endpoint | Description |
|---|---|---|
| GET | `/api/favorites` | Retrieve favorite stories |
| GET | `/api/favorites/status/:storyId` | Check favorite status |
| POST | `/api/favorites/:storyId` | Add a story to favorites |
| DELETE | `/api/favorites/:storyId` | Remove a story from favorites |

Protected endpoints require a valid JWT token in the Authorization header.

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

## Data Structure

The application uses JSON files for data storage.

### users.json

Stores user account information, including:
- User ID
- Full name
- Email address
- Hashed password
- Phone number
- Favorite story IDs

### stories.json

Stores cultural story information, including:
- Story ID
- Story title
- Province of origin
- Story type
- Image reference
- Story content

Example story structure:

```json
{
  "id": "danau-toba",
  "title": "Legenda Danau Toba",
  "province": "sumatera-utara",
  "type": "legenda",
  "image": "images/danau-toba.png",
  "content": "Story content"
}
```

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/alsbbl/website-nusantara-bercerita.git
```

### 2. Navigate to the Project Directory

```bash
cd website-nusantara-bercerita
```

### 3. Install Dependencies

```bash
npm install
```

### 4. Configure Environment Variables

Create a `.env` file or configure environment variables in your operating system.

```env
PORT=3000
JWT_SECRET=your_secure_random_secret
```

The backend should be configured to load these variables using a package such as `dotenv` before running. Do not use the default JWT secret in production.

### 5. Run the Backend Server

```bash
node server.js
```

The backend server will run at:

```text
http://localhost:3000
```

To verify that the server is running, open the root endpoint:

```text
http://localhost:3000/
```

Expected response:

```text
Server backend Nusantara Bercerita aktif!
```

## Repository Structure

```text
website-nusantara-bercerita/
│
├── server.js
│
├── package.json
│
├── package-lock.json
│
├── stories.json
│
├── users.json
│
└── README.md
```

## Future Development

Potential improvements include:

- Implementing a database such as PostgreSQL or MongoDB.
- Adding story search and filtering functionality.
- Expanding the folklore collection across Indonesian provinces.
- Implementing an administrator dashboard for content management.
- Adding story recommendations.
- Improving API security and input validation.
- Developing automated API testing.
- Deploying the application to a cloud server.

## Project Information

| Information | Details |
|---|---|
| Project Name | Nusantara Bercerita |
| Author | Safira Khoirulanisa Salsabila |
| Programming Language | JavaScript |
| Runtime | Node.js |
| Framework | Express.js |
| Application Type | Web Application Backend |
| Domain | Digital Cultural Preservation |
| Repository | GitHub |

## Conclusion

Nusantara Bercerita demonstrates the application of web development technologies to support Indonesian cultural preservation.

By integrating REST API development, user authentication, profile management, and digital storytelling, this project provides a foundation for delivering Indonesian folklore through an accessible digital platform.

---

**Keywords:** Web Development, Node.js, Express.js, REST API, JavaScript, JWT Authentication, Digital Cultural Heritage, Indonesian Folklore, Cultural Preservation.
