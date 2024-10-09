const { default: mongoose } = require("mongoose");

module.exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("DB Connection Failed");
        console.error(error);
        process.exit(1); 
    }
};