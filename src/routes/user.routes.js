"use strict";

// IMPORTS ==================================================================================================
const { Router } = require("express");
const { userController } = require("../controllers");
const authentication = require("../middleware/authentication.middleware");

const router = new Router();

// API ROUTES ===============================================================================================
router.post("/register", userController.addUser);
router.post("/login", userController.userLogin);

// All APIs written below needs to be authenticated with token.
router.get("/get-all", authentication, userController.getAllUsers);
router.put("/logout", authentication, userController.userLogout);

// EXPORTS ==================================================================================================
module.exports = router;
