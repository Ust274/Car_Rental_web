# OpenRoads - Car Rental Platform

OpenRoads is a modern car rental application designed to provide a seamless experience for users to browse, book, and manage car rentals. Built with React, Tailwind CSS, and Lucide React for the front-end, and powered by Node.js, Express, and MongoDB Atlas for the back-end, OpenRoads delivers a responsive, efficient, and scalable solution for car rental services.

Home
![image](https://github.com/user-attachments/assets/dbdc6694-d2cc-46a1-9bb7-6ff717092fb5)



## Features

- **User Authentication**: Secure login and signup functionality.
- **Car Listings**: Browse available cars with detailed information (e.g., make, model, price, and availability).
- **Booking System**: Based on type, estimated bookings
- **Admin Dashboard**: Manage car listings, bookings, and user data.
- **Responsive Design**: Optimized for both desktop and mobile devices.

## Tech Stack

### Front-End
- **React**: For building a dynamic and interactive user interface.
- **Tailwind CSS**: For fast and customizable styling.
- **Lucide React**: For modern and scalable iconography.

### Back-End
- **Node.js & Express**: For creating a robust REST API.
- **MongoDB Atlas**: For secure and scalable database management.

## Installation

### Prerequisites
- Node.js and npm installed on your system.
- MongoDB Atlas account set up with a cluster.

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Ust274/Car_Rental_web.git
   cd Car_Rental
   ```

2. **Set up the front-end:**
   ```bash
   cd client
   npm install
   npm start
   ```

3. **Set up the back-end:**
   ```bash
   cd server
   npm install
   ```

4. **Configure environment variables:**
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_atlas_uri
     JWT_SECRET=your_jwt_secret
     ```

5. **Start the back-end server:**
   ```bash
   npm start
   ```

6. **Access the application:**
   - Front-end: [https://car-rental-web-jx9p.vercel.app/](https://car-rental-web-jx9p.vercel.app/)
   - Back-end: [https://car-rental-web-v7nq.onrender.com](https://car-rental-web-v7nq.onrender.com)

## Folder Structure

```
OpenRoads/
├── client/         # Front-end React application
│   ├── src/        # Source files
│   ├── public/     # Static assets
│   └── ...
├── server/         # Back-end Node.js application
│   ├── models/     # Database models
│   ├── routes/     # API routes
│   ├── controllers/ # Business logic
│   └── ...
└── README.md       # Project documentation
```

## Future Enhancements

- Add payment gateway integration for seamless transactions.
- Implement advanced analytics for admins.
- Introduce a loyalty program for frequent users.
- Add multi-language support.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes. For major changes, please open an issue first to discuss what you would like to change.
