const router = require("@curveball/router").default;
const homeController = require("./controllers/default");
const todoController = require("./controllers/todo");

module.exports = [
  router("/", homeController.get),
  router("/todo").get(todoController.get).post(todoController.add),
  router("/todo/update", todoController.update),
  router("/todo/delete", todoController.delete),
  router("/todo/add", todoController.add),
  router("/todo/read", todoController.read),
  router("/todo/:id").get(todoController.readOne).put(todoController.update),
];
