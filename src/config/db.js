const mongoose = require('mongoose');

async function ConnectDB(mongoURI) {
  try {
    await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log('MongoDB Connected...');
  } catch (error) {
    console.log(`ConnectDB Error: ${error}, MongoURI: ${mongoURI}`);
  }
}

module.exports = {
  ConnectDB,
};
