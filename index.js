const express = require('express');
const router = require('./routes');

const app = express();
app.use(express.json());
app.use(router);
const port = process.env.PORT || 9000

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});