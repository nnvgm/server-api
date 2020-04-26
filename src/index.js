const app = require('./app');
const config = require('./config/main');
const { ConnectDB } = require('./config/db');

const { port, mongoURI } = config;

ConnectDB(mongoURI);

app.listen(port, () => console.log(`Server is running on ${port}`));
