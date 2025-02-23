const mongoose = require("mongoose");
const express = require("express");
const userRoutes = require("./Routes/userRoutes");
const orderRoutes = require("./Routes/orderRoutes");

const app = express();

mongoose.connect("mongodb://localhost:27017/Laundry_Cart")
.then(() => console.log("MongoDB Connected"))
.catch((err) => console.log("MongoDB connection Error: ", err));

app.use(express.json());

app.get("/", async(req, res) => {
    res.send("Ok");
})

app.use("/api/users", userRoutes);
app.use("/api/orders", orderRoutes);

app.listen(5000, () => {console.log("Server is running at port 5000.")});