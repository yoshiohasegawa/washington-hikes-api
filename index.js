const express = require('express');
const { setupServer } = require('./routes');
const path = require("path");

const app = setupServer();
const port = process.env.PORT || 9000

app.use(express.static('public'));
app.use(express.static(path.join(__dirname)));

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
