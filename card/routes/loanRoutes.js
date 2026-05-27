const express = require("express");
const verifyToken = require("../middleware/verifyToken");

const router = express.Router();

router.post("/", verifyToken, (req, res) => {
  res.status(201).json({ message: "zeeldelt burtgegdlee" });
});

router.patch("/:id/return", verifyToken, (req, res) => {
  res.status(200).json({ message: "nom butsaagdlaa" });
});

module.exports = router;
