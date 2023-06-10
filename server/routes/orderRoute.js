const express = require("express");
const { newOrder, getSingleOrder, myOrders } = require("../controllers/orderController");
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

const router = express.Router();

router.route("/order/new").post(isAuthenticatedUser, newOrder);

router.route("/order/:id")
    .get(isAuthenticatedUser, authorizeRoles("admin", getSingleOrder));

router.route("/order/me").get(isAuthenticatedUser, myOrders);


module.exports = router;