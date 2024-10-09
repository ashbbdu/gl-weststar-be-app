const { default: mongoose } = require("mongoose");
require("dotenv").config()

module.exports.connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL , {
            useNewUrlParser: true,
            useUnifiedTopology:true,
        });
        console.log("DB Connected Successfully");
    } catch (error) {
        console.error("DB Connection Failed");
        console.error(error);
        process.exit(1); 
    }
};