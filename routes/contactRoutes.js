const express = require("express");
const router = express.Router();
const {
  getAllContact,
  getContact,
  updateContact,
  createContact,
  deleteContact
} = require("../controllers/contactController");
const validateToken = require("../middleware/validateTokenHandler");

// routes
router.use(validateToken);
router.route("/").get(getAllContact).post(createContact);
router.route("/:id").get(getContact).put(updateContact).delete(deleteContact);

module.exports = router;
