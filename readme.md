# Flowgram - Authentication & Post Creation Module

This part of the **Flowgram** project implements **user authentication** (JWT-based) and **post creation** with **AI-generated captions** and **ImageKit cloud storage**.  

---

##  Features

###  Authentication
- User Registration with **bcrypt password hashing**
- User Login with **JWT authentication**
- Secure cookies for session handling
- Middleware to protect routes (`authMiddleware`)

###  Post Creation
- Upload image file
- Generate **AI-powered captions** using **Google Gemini API**
- Store image in **ImageKit**
- Save post (caption + image + user reference) in MongoDB

---


##  Tech Stack
- **Node.js + Express.js**
- **MongoDB + Mongoose**
- **JWT (JSON Web Tokens)** for authentication
- **bcryptjs** for password hashing
- **ImageKit** for image storage
- **uuid** for image unique name
- **Google Gemini API** for AI-generated captions

---

## Setup & Installation

1. **Clone Repository**
   ```bash
   git clone https://github.com/yourusername/flowgram.git
   cd flowgram
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Environment Variables**
   Create a `.env` file and add the following:
   ```env
   MONGO_URI=your_mongodb_connection
   JWT_SECRET=your_jwt_secret
   GEMINI_API_KEY=your_google_gemini_api_key

   IMAGEKIT_PUBLIC_KEY=your_imagekit_public_key
   IMAGEKIT_PRIVATE_KEY=your_imagekit_private_key
   IMAGEKIT_URL_ENDPOINT=your_imagekit_url
   ```

4. **Run Server**
   ```bash
   npm start
   ```

---

##  Authentication Endpoints

### Register User
```http
POST /api/auth/register
```
**Request Body**
```json
{
  "username": "john_doe",
  "password": "securepassword123"
}
```

### Login User
```http
POST /api/auth/login
```
**Request Body**
```json
{
  "username": "john_doe",
  "password": "securepassword123"
}
```

---

##  Post Creation Endpoint

### Create Post (Protected Route)
```http
POST /api/posts
```
- Requires **JWT cookie** from login.
- Accepts an image file (multipart/form-data).

**Example Response**
```json
{
  "message": "Post created successfully",
  "post": {
    "_id": "65f9ab1d3e9a",
    "caption": "🌸 Beautiful day in the park! #NatureVibes",
    "image": "https://ik.imagekit.io/.../flowgram/uuid.jpg",
    "user": "65f9aabf2d1c",
    "createdAt": "2025-09-15T20:45:00Z"
  }
}
```

---

## Future Improvements
- Add **user profile management**
- Implement **like & comment system**
- Enhance AI captions with different styles
- Add **post feed with pagination**

---

