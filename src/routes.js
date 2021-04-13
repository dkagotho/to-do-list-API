const router = require("@curveball/router").default;
const homeController = require("./home/controller");

module.exports = [router("/", homeController.get)];
