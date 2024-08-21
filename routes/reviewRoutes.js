const express = require("express");
const router = express.Router();
const {
  submitReview,
  getAllReviews,
  getReviewById,
} = require("../controllers/reviewController");
const auth = require("../middleware/auth");

router.post("/", auth, submitReview);

router.get("/", getAllReviews);

router.get("/:id", getReviewById);

module.exports = router;
