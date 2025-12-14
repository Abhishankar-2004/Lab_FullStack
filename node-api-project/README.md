# Node.js REST API for Product Management

A comprehensive REST API implementation built with both Node.js built-in HTTP module and Express.js framework, demonstrating full CRUD operations for product management.

## Features

✓ **Built-in HTTP Server** - Pure Node.js implementation without external frameworks  
✓ **Express.js REST API** - Production-ready with middleware and validation  
✓ **Full CRUD Operations** - Create, Read, Update, Delete functionality  
✓ **Comprehensive Validation** - Input validation and error handling  
✓ **In-Memory Database** - Simple data storage for demonstration  
✓ **Request Logging** - Track all API requests  
✓ **Filtering** - Filter products by category  
✓ **Health Check** - Monitor server status  

## Project Structure

```
node-api-project/
├── Node-http-server.js     # Built-in HTTP module implementation
├── Express-api.js          # Express.js REST API
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## Installation

1. Install dependencies:
```bash
npm install
```

## Running the Servers

### Express.js API (Recommended)
```bash
npm start
# or with auto-reload
npm run dev
```
- Server runs on: `http://localhost:5000`

### Built-in HTTP Server
```bash
npm run start:http
# or with auto-reload
npm run dev:http
```
- Server runs on: `http://localhost:3000`

## API Endpoints

### Product Management

#### Get All Products
```bash
GET /api/products
# Filter by category:
GET /api/products?category=Electronics
```
**Response:**
```json
{
  "success": true,
  "count": 3,
  "data": [
    {
      "id": 1,
      "name": "Laptop",
      "price": 1200,
      "category": "Electronics",
      "stock": 5
    }
  ]
}
```

#### Get Single Product
```bash
GET /api/products/:id
```
**Response:**
```json
{
  "success": true,
  "data": {
    "id": 1,
    "name": "Laptop",
    "price": 1200,
    "category": "Electronics",
    "stock": 5
  }
}
```

#### Create Product
```bash
POST /api/products
Content-Type: application/json

{
  "name": "Monitor",
  "price": 300,
  "category": "Electronics",
  "stock": 15
}
```
**Response:**
```json
{
  "success": true,
  "message": "Product created",
  "data": {
    "id": 4,
    "name": "Monitor",
    "price": 300,
    "category": "Electronics",
    "stock": 15
  }
}
```

#### Update Product (Full Update)
```bash
PUT /api/products/:id
Content-Type: application/json

{
  "name": "Gaming Laptop",
  "price": 1500,
  "category": "Gaming",
  "stock": 10
}
```
**Response:**
```json
{
  "success": true,
  "message": "Product updated",
  "data": {
    "id": 1,
    "name": "Gaming Laptop",
    "price": 1500,
    "category": "Gaming",
    "stock": 10
  }
}
```

#### Partial Update Product
```bash
PATCH /api/products/:id
Content-Type: application/json

{
  "price": 1100,
  "stock": 8
}
```
**Response:**
```json
{
  "success": true,
  "message": "Product partially updated",
  "data": {
    "id": 1,
    "name": "Laptop",
    "price": 1100,
    "category": "Electronics",
    "stock": 8
  }
}
```

#### Delete Product
```bash
DELETE /api/products/:id
```
**Response:**
```json
{
  "success": true,
  "message": "Product deleted",
  "data": {
    "id": 4,
    "name": "Monitor",
    "price": 300,
    "category": "Electronics",
    "stock": 15
  }
}
```

#### Health Check
```bash
GET /health
```
**Response:**
```json
{
  "status": "Express API is healthy"
}
```

## Testing with cURL

### Get all products
```bash
curl http://localhost:5000/api/products
```

### Create a product
```bash
curl -X POST http://localhost:5000/api/products \
  -H "Content-Type: application/json" \
  -d '{"name":"Headphones","price":150,"category":"Accessories","stock":20}'
```

### Update a product
```bash
curl -X PUT http://localhost:5000/api/products/1 \
  -H "Content-Type: application/json" \
  -d '{"price":1400}'
```

### Delete a product
```bash
curl -X DELETE http://localhost:5000/api/products/4
```

## Testing with Postman

1. Open Postman
2. Import the API endpoints from the documentation above
3. Test each endpoint with the provided examples

## Error Handling

All endpoints return consistent error responses:

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation failed",
  "errors": [
    "Name is required and must be a string",
    "Price is required and must be a positive number"
  ]
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Product not found"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal server error",
  "error": "Error details here"
}
```

## Data Structure

Product object schema:
```javascript
{
  id: Number,              // Auto-generated unique identifier
  name: String,            // Product name (required)
  price: Number,           // Price in dollars (required, must be positive)
  category: String,        // Product category (optional, defaults to "Uncategorized")
  stock: Number            // Stock quantity (optional, defaults to 0)
}
```

## Validation Rules

- **name**: Required, must be a string
- **price**: Required, must be a positive number
- **category**: Optional, must be a string if provided
- **stock**: Optional, must be a non-negative number if provided

## Initial Data

The API comes preloaded with sample products:
```json
[
  { "id": 1, "name": "Laptop", "price": 1200, "category": "Electronics", "stock": 5 },
  { "id": 2, "name": "Mouse", "price": 25, "category": "Accessories", "stock": 50 },
  { "id": 3, "name": "Keyboard", "price": 75, "category": "Accessories", "stock": 30 }
]
```

## Comparison: HTTP Module vs Express.js

### Built-in HTTP Server (`Node-http-server.js`)
- ✓ No external dependencies
- ✓ Lightweight and minimal
- ✓ Full control over routing
- ✗ More verbose code
- ✗ Manual request parsing
- ✗ Limited middleware support

### Express.js (`Express-api.js`)
- ✓ Cleaner, more concise code
- ✓ Built-in middleware support
- ✓ Better error handling
- ✓ Easier to extend and maintain
- ✓ Industry standard framework
- ✗ Slight performance overhead
- ✗ Additional dependency

## Environment

- **Node.js**: >= 14.0.0
- **Express.js**: ^5.1.0
- **Nodemon**: ^3.1.10 (dev dependency)

## Development

Run with auto-reload during development:
```bash
npm run dev        # Express API
npm run dev:http   # HTTP Server
```

## Production

For production deployment:
```bash
npm start          # Express API
npm start:http     # HTTP Server
```

## Future Enhancements

- Database integration (MongoDB, PostgreSQL)
- User authentication and authorization
- Rate limiting
- Pagination
- Advanced filtering and search
- Unit and integration tests
- API documentation with Swagger/OpenAPI
- Docker containerization

## License

ISC

---

**Created**: December 2024  
**Author**: Full Stack Development  
