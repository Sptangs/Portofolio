const express = require("express");
const cors = require("cors");  // Import cors
const user = require("./models/user");
const userRoutes = require('./routes/userRoutes');

const app = express();
const port = 3000;

// Use CORS middleware
app.use(cors());

// Use built-in JSON parser
app.use(express.json());

// Use the user routes with /api prefix
app.use('/api', userRoutes);

// Create user table and handle potential errors
try {
    user.createUserTable();
} catch (error) {
    console.error('Error creating user table:', error);
}

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
