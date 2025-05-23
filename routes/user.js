const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware");

const userControllers = require("../controllers/user");

router
  .route("/signup")
  .get(userControllers.renderSignupForm)
  .post(wrapAsync(userControllers.signUp));

router
  .route("/login")
  .get(userControllers.renderLoginForm)
  .post(
    saveRedirectUrl,
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }),
    userControllers.login
  );

router.get("/logout", userControllers.logout);

module.exports = router;
