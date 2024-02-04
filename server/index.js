const express = require('express');
const cors = require('cors');
const app = express();

//router
const router = require('./router/index.router');

app.use(cors());
app.use(express.json());
app.use(router);

const port = 1234;
app.listen(port, () =>
  console.log(`server is running at http://localhost:${port}`)
);
