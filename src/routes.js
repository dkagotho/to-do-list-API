const router = require("@curveball/router").default;
const homeController = require("./controllers/default");
const todoController = require("./controllers/todo");

module.exports = [
  router("/", homeController.get),
  router("/todo", todoController.get),
  router("/todo/update", todoController.update),
  router("/todo/delete", todoController.delete),
  router("/todo/add", todoController.add),
];
