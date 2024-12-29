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
- `POST /RegisterUser` - Register a new user.  
- `POST /Login` - Log in to the application.  
- `GET /GetAllUsersAsAdmin` - Retrieve all users (Admin access).  
- `GET /GetUserbyID` - Get user information by ID.  
- `GET /getLoggedInUserInfo` - Retrieve logged-in user details.  
- `GET /getUserBookingHistory` - View user booking history.  
- `DELETE /DeleteUser` - Delete a user profile.

### Room Endpoints
- `POST /AddRoom` - Add a new room (Admin access).  
- `GET /GetAllRooms` - View all available rooms.  
- `GET /GetRoomById` - Retrieve room details by ID.  
- `PUT /UpdateRoomById` - Update room details (Admin access).  
- `DELETE /DeleteRoomById` - Remove a room from the system (Admin access).  
- `GET /AllAvailableRooms` - View currently available rooms.  
- `GET /GetAvailableRoomByDate` - Check room availability for specific dates.  
- `GET /allRoomTypes` - View all room types.

### Booking Endpoints
- `POST /BookARoom` - Make a room booking.  
- `GET /GetBokingConfirmation` - Retrieve booking confirmation details.  
- `GET /GetBookingsByUserId` - Fetch bookings for a specific user.  
- `DELETE /CancelBookingByUserId` - Cancel an existing booking.

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

