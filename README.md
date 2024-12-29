# Hotel Booking System Frontend

This document outlines the **frontend service** for the Hotel Booking System. Developed using **React**, the frontend integrates seamlessly with the backend to provide a user-friendly interface for hotel management operations. The application features responsive styling using **CSS** and **Bootstrap**.

---

## Features

### User Management
- Register and log in to the application.  
- Retrieve information for the currently logged-in user.

### Room Management
- Browse and filter available rooms.  
- View detailed room information, including availability by date.

### Booking Management
- Book rooms securely and receive booking confirmations.  
- Access booking history for logged-in users.
- confirm booking by confirmation number

### Authentication
- Secured endpoints using **JWT** (JSON Web Tokens).

---

## Technologies Used

| **Category**          | **Technology**         |
|------------------------|------------------------|
| **Frontend Framework** | React                 |
| **Styling**            | CSS, Bootstrap        |
| **State Management**   | Redux                 |
| **Authentication**     | JSON Web Tokens (JWT) |
| **Deployment**         | AWS                   |

---

## Prerequisites

Before running the project locally, ensure you have the following installed:

- Node.js (version 18.x or higher).  
- npm or yarn (for package management).

---

## Setup Instructions

1. **Clone the Repository**  
   Open a terminal and run:
   ```bash
   git clone https://github.com/your-repo/Hotel-Front.git
   cd Hotel-Front
   ```

2. **Install Dependencies**  
   Install all required project dependencies by running:
   ```bash
   npm install
   ```

3. **Environment Variables**  
   Create a `.env` file in the root directory of the project and add the following configurations:
   ```env
   REACT_APP_BACKEND_URL=http://localhost:8080  # Replace with your backend URL
   REACT_APP_JWT_SECRET=your_jwt_secret        # Replace with your JWT secret
   ```

4. **Run the Application Locally**  
   Start the development server by running:
   ```bash
   npm start
   ```

5. **Access the Frontend**  
   Open a web browser and navigate to:  
   [http://localhost:3000](http://localhost:3000)

---

## API Endpoints
I will add you to the postman workspace
The following APIs are integrated into the frontend:

### User Endpoints
- `POST /16.171.253.87:8080/auth/register` - Register a new user.  
- `POST /16.171.253.87:8080/auth/login` - Log in to the application.  
- `GET /16.171.253.87:8080/users/all` - Retrieve all users (Admin access). (You can register as admin like this:
    "email": "....@gmail.com",
    "password": "....",
    "phoneNumber": ".....",
    "name": ".....",
    "role":ADMIN
  THEN USE THE TOKEN YOU GOT AS ADMIN TO TO ALL STUFF ONLY ADMIN CAN(UPDATE/DELETE ROOMS etc.)
- `GET /16.171.253.87:8080/users/get-by-id/2` - Get user information by ID.  
- `GET /16.171.253.87:8080/users/get-logged-in-profile-info` - Retrieve logged-in user details.  
- `GET /16.171.253.87:8080/users/get-user-bookings/2` - View user booking history.  
- `DELETE /l16.171.253.87:8080/users/delete/4` - Delete a user profile.

### Room Endpoints
- `POST /16.171.253.87:8080/rooms/add` - Add a new room (Admin access).  
- `GET /16.171.253.87:8080/rooms/all` - View all available rooms.  
- `GET /16.171.253.87:8080/rooms/room-by-id/2` - Retrieve room details by ID.  
- `PUT /16.171.253.87:8080/rooms/update/2` - Update room details (Admin access).  
- `DELETE /16.171.253.87:8080/rooms/delete/8` - Remove a room from the system (Admin access).  
- `GET /16.171.253.87:8080/rooms/all-available-rooms` - View currently available rooms.  
- `GET /16.171.253.87:8080/rooms/available-rooms-by-date-and-type?checkInDate=2024-12-12&checkOutDate=2024-12-13&roomType=Standart Single` - Check room availability for specific dates.  
- `GET /16.171.253.87:8080/rooms/types` - View all room types.

### Booking Endpoints
- `POST /16.171.253.87:8080/bookings/book-room/2/6` - Make a room booking.  
- `GET /16.171.253.87:8080/bookings/get-by-confirmation-code/ZOTKPBQK1V` - Retrieve booking confirmation details.  
- `GET /16.171.253.87:8080/users/get-user-bookings/6` - Fetch bookings for a specific user.  
- `DELETE /16.171.253.87:8080/bookings/cancel/1` - Cancel an existing booking.

---

## Deployment

The Hotel Booking System, including the frontend and backend, is fully deployed on **AWS**, ensuring scalability, reliability, and performance.

http://hotel-booking-system.s3-website.eu-north-1.amazonaws.com

## Key Dependencies

| **Dependency** | **Purpose**                           |
|-----------------|---------------------------------------|
| React           | Frontend framework for UI            |
| Redux           | State management library             |
| Axios           | Handling API requests and responses  |
| Bootstrap       | Styling and responsive design        |
| JWT Decode      | Authentication and token management  |

For a full list of dependencies, refer to the `package.json` file.

---

## License

This project is licensed under the MIT License. Refer to the LICENSE file for details.

