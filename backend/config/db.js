const mongoose = require("mongoose");

const connectDB = (URI) => {
  mongoose.connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  mongoose.set('strictQuery', true);
};


module.exports = connectDB