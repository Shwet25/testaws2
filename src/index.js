"use strict";

// IMPORTS ==================================================================================================
const http = require("http");
const cors = require("cors");
const express = require("express");

const { serverConfig } = require("../config");
const middleware = require("./middleware");

// INITIATION ===============================================================================================
const app = new express();
const server = http.createServer(app);
const router = require("./routes");

// DATABASE CONNECTION ======================================================================================
require("./includes/database_connection");

// APP USES =================================================================================================
app.use(
    cors(),
    express.json(),
    express.urlencoded({ extended: true }),
    express.static("public")
);

app.use(middleware.apiResponseMiddleware);
app.use("/v1", router);
app.use(middleware.apiNotFoundMiddleware);
app.use(middleware.errorHandlerMiddleware);

// ON AIR ===================================================================================================
server.listen(serverConfig.port, () => {
    console.log(`E-Commerce server is listening to port: ${serverConfig.port}`);
});
