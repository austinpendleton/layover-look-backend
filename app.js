const express = require("express");
const app = express();
const usersRoute = require("./routes/userRoutes");

app.use(express.json());

// Using the route
app.use("/api", usersRoute);

// Server setup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
