const mongoose = require("mongoose");
async function connect() {
  try {
    await mongoose.connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connect Successfully");
  } catch (error) {
    console.log("Connect Failure");
  }
}

module.exports = { connect };
