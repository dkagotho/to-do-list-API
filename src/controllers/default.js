const Controller = require("@curveball/controller");
const { Context } = require("@curveball/core");

const HomeController = {
  get(ctx) {
    ctx.response.type = "application/json";
    ctx.response.body = "<h1>hello world</h1>";
  },
};

module.exports = HomeController;
