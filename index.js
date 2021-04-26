const express = require('express');
const { setupServer } = require('./routes');

const app = setupServer();
const port = process.env.PORT || 9000

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
