# Contact Manager

A Node.js and Express-based REST API application for managing contacts. This project demonstrates a complete backend implementation with MongoDB for data persistence.

## Overview

Contact Manager is a simple yet functional CRUD (Create, Read, Update, Delete) API that allows users to manage contact information. The application uses Express.js for routing, MongoDB with Mongoose for data modeling, and follows a modular architecture pattern.

## Features

- **Create Contacts**: Add new contact entries to the database
- **Read Contacts**: Retrieve all contacts or specific contact details
- **Update Contacts**: Modify existing contact information
- **Delete Contacts**: Remove contacts from the database
- **Error Handling**: Comprehensive error handling for API endpoints
- **Environment Configuration**: Uses environment variables for sensitive configuration

## Project Structure

```
ContactManager/
├── app.js                          # Main application entry point
├── package.json                    # Project dependencies and scripts
├── config/
│   └── dbConnect.js               # MongoDB connection configuration
├── controllers/
│   └── contactController.js       # Business logic for contact operations
├── model/
│   └── contactModel.js            # Mongoose schema and model definition
└── routes/
    └── contactRoutes.js           # API endpoint definitions
```

## Tech Stack

- **Runtime**: Node.js
- **Framework**: Express.js (^4.21.2)
- **Database**: MongoDB with Mongoose (^7.8.7)
- **Configuration**: dotenv (^16.6.1)
- **Development**: nodemon (^3.1.10)

## Installation

1. Clone or navigate to the ContactManager directory:
```bash
cd ContactManager
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory and configure your environment variables:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/contactmanager
```

4. Ensure MongoDB is running on your system.

## Usage

### Development Mode
Start the application with auto-reload using nodemon:
```bash
npm run dev
```

### Production Mode
Start the application normally:
```bash
npm start
```

The server will run on the configured PORT (default: 5000).

## API Endpoints

All endpoints are prefixed with `/api/contacts`

### Get All Contacts
```
GET /api/contacts
```
Returns a list of all contacts in the database.

### Create a Contact
```
POST /api/contacts
```
Request body should include contact details.

### Get Contact by ID
```
GET /api/contacts/:id
```
Returns a specific contact by ID.

### Update Contact
```
PUT /api/contacts/:id
```
Updates an existing contact with provided data.

### Delete Contact
```
DELETE /api/contacts/:id
```
Removes a contact from the database.

## File Descriptions

### [app.js](app.js)
Main application file that:
- Initializes the Express application
- Configures middleware (JSON parser)
- Connects to MongoDB
- Registers API routes
- Starts the server

### [config/dbConnect.js](config/dbConnect.js)
Handles MongoDB connection setup using Mongoose.

### [controllers/contactController.js](controllers/contactController.js)
Contains all business logic for contact operations:
- `getAllContacts()` - Fetch all contacts
- `createContact()` - Create a new contact
- Additional CRUD operations

### [model/contactModel.js](model/contactModel.js)
Defines the Mongoose schema for the Contact data model with validation rules.

### [routes/contactRoutes.js](routes/contactRoutes.js)
Maps HTTP endpoints to controller functions.

## Dependencies

- **express**: Web application framework
- **mongoose**: MongoDB object modeling
- **dotenv**: Environment variable management
- **nodemon** (dev): Auto-restart on file changes

## Requirements

- Node.js (v12 or higher)
- MongoDB (local or remote instance)
- npm or yarn package manager

## Environment Variables

Create a `.env` file with:
- `PORT`: Server port (default: 5000)
- `MONGODB_URI`: MongoDB connection string

## Error Handling

The API includes error handling for:
- Invalid requests (400 Bad Request)
- Server errors (500 Internal Server Error)
- Database connection issues

## Development Notes

- Uses `nodemon` for development to auto-restart on file changes
- Follows MVC (Model-View-Controller) architecture pattern
- Implements async/await for asynchronous operations
- Uses try-catch blocks for error handling

## Future Improvements

- Add authentication and authorization
- Implement input validation middleware
- Add API documentation with Swagger
- Create unit and integration tests
- Implement pagination for large datasets
- Add logging functionality
- Create a frontend interface

## License

This project is open source and available under the MIT License.

## Author

Created as part of a full-stack development learning project.
