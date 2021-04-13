const Controller = require("@curveball/controller");
const { Context } = require("@curveball/core");

const HomeController = {
  get(ctx) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      title: "Hello World!",
    };
  },
};

module.exports = HomeController;
