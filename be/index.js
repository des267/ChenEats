/**
 * index.js
 *
 * Starts backend application using express to connect
 * to a MongoDB database.
 */

import express from "express";
import connectDB from "./services/database.service.js";
import homeRoute from "./routes/home.route.js";
import customerRoute from "./routes/customer.route.js";
import orderRoute from "./routes/order.route.js";
import restaurantRoute from "./routes/restaurant.route.js";

const port = 8000;
const app = express();

// Connect to Mongo database
connectDB();

// Express built in body-parser
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/", homeRoute);
app.use("/customer", customerRoute);
app.use("/restaurant", restaurantRoute);
app.use("/order", orderRoute);

// Configure listening
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
