const Controller = require("@curveball/controller");
const { Context } = require("@curveball/core");

task = [];

const todoController = {
  get(ctx) {
    ctx.response.type = "application/json";
    ctx.response.body = task;
  },
  update(ctx) {
    for (let index = 0; index < task.length; index++) {
      if (task[index].name === ctx.request.query.name) {
        task[index].completed = true;
        ctx.response.body = task;
      }
    }
  },
  delete(ctx) {
    for (let index = 0; index < task.length; index++) {
      if (task[index].name === ctx.request.query.name) {
        task[index].deleted = true;
        ctx.response.body = task;
      }
    }
  },
  add(ctx) {
    task.push({
      name: ctx.request.query.name,
      completed: false,
    });
    ctx.response.body = task;
  },
};

module.exports = todoController;
