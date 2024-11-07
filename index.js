const express = require('express');
const routes = require('./routes');
const connectDatabase = require('./database/connection');

const app = express();

// connect to database
connectDatabase();

const port = process.env.PORT || 3000;

app.use(express.json());

app.use('/', routes);

app.listen(port, () => console.log(`Listening on port ${port}`));