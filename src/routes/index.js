"use strict";

// IMPORTS ==================================================================================================
const { Router } = require("express");
const routes = {
    userRoutes: require("./user.routes"),
};

const router = new Router();

// API MIDDLE POINTS ========================================================================================
router.use("/user", routes.userRoutes);

// EXPORTS ==================================================================================================
module.exports = router;
