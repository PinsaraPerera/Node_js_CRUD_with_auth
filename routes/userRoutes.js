const express = require("express");
const {
  registerUser,
  loggingUser,
  currentUser,
} = require("../controllers/userController");
const validateToken = require("../middleware/validateTokenHandler");
const router = express.Router();

// routes
router.post("/register", registerUser);
router.post("/login", loggingUser);
router.get("/current", validateToken, currentUser);

module.exports = router;
