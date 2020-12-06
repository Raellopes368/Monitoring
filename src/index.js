require('dotenv').config();
require('./database/mongo');

const app = require('./app');

const { port } = require('./config/server');

app.listen(port, () => console.log(`run http://localhost:${port}`));
