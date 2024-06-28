const { cyan } = require("colors");
const mongoose = require("mongoose");

// {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   }

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.log(`error: ${error.message}`.red.bold);
    process.exit();
  }
};

module.exports = connectDB;
