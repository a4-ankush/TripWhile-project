const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");

const Review = require("../models/review.js");
const Listing = require("../models/listing.js");

const reviewControllers = require("../controllers/review.js");

const {
  validateReview,
  isLoggedIn,
  isReviewAuthor,
} = require("../middleware.js");

// reviews route
//post route for reviews
router.post(
  "/",
  isLoggedIn,
  validateReview,
  wrapAsync(reviewControllers.createReview)
);

// delete route for reviews

router.delete(
  "/:reviewId",
  isLoggedIn,
  isReviewAuthor,
  wrapAsync(reviewControllers.destroyReview)
);

module.exports = router;
