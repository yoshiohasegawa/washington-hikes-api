const express = require('express');
const hikesRouter = require("./hikes.js");

const setupServer = () => {
  const server = express();

  server.use('/washingtonhikes/api/hikes', hikesRouter)

  return server;
};

module.exports = { setupServer };
