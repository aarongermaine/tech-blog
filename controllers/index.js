const router = require("express").Router();
const apiRoutes = require("./api/");
const homeRoutes = require("./home-routes.js");
const dashboardRoutes = require("./dash-routes.js");

router.use("/", homeRoutes);
router.use("/dash", dashboardRoutes);
router.use("/api", apiRoutes);

module.exports = router;
