const express = require("express")
const authRoutes  = require("./routes/Auth");
const shipmentRoutes = require("./routes/Shipment") ;
const { connectDB } = require("./config/database");

require("dotenv").config();

const app = express();
app.use(express.json())

const PORT = process.env.PORT || 8000;

connectDB()
app.listen(PORT , () => {
    console.log(`App is listening on PORT ${PORT}`);
})

app.use("/api/v1/auth" , authRoutes)
app.use("/api/v1/shipment" , shipmentRoutes)

app.get("/" , (req , res) => {
    res.send("App is up and running")
})