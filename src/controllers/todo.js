const Controller = require("@curveball/controller");
const { Context } = require("@curveball/core");

task = [];
lastTaskId = 0;

const todoController = {
  get(ctx) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      total: task.length,
      _links: {
        self: {
          href: "http://localhost:8081/todo",
        },
        item: task.map((todoItem) => ({
          href: `http://localhost:8081/todo/${todoItem.id}`,
        })),
      },
    };
  },
  update(ctx) {
    console.log(ctx.params);
    const taskId = parseInt(ctx.params.id, 10);
    const taskDeleted = ctx.request.body.deleted;
    console.log(ctx.request.body.deleted);
    console.log(ctx.request.body);
    const taskCompleted = ctx.request.body.completed;
    let result = {};
    for (let index = 0; index < task.length; index++) {
      const element = task[index];
      // console.log(task[index], taskId, element.id === taskId);
      result = element;
      if (element.id === taskId) {
        element.completed = taskCompleted;
        element.deleted = taskDeleted;
      }
    }
    ctx.response.status = 204;
  },
  delete(ctx) {
    console.log(ctx.params);
    const taskId = parseInt(ctx.params.id, 10);
    let result = {};
    for (let index = 0; index < task.length; index++) {
      const element = task[index];
      console.log(task[index], taskId, element.id === taskId);
      result = element;
      if (element.id === taskId) {
        element.deleted = true;
      }
    }
    ctx.response.status = 204;
  },
  add(ctx) {
    //add id to the new task
    var { name } = ctx.request.body;
    console.log("task", name, ctx.request.body);
    if (name) {
      task.push({
        id: ++lastTaskId,
        name: name,
        completed: false,
      });
    }
    ctx.response.status = 204;
  },
  read(ctx) {
    ctx.response.body = {
      task,
      _links: {
        self: {
          href: "http://localhost:8081/todo/read",
        },
      },
    };
  },
  readOne(ctx) {
    console.log(ctx.params);
    const taskId = parseInt(ctx.params.id, 10);
    let result = {};
    for (let index = 0; index < task.length; index++) {
      const element = task[index];
      console.log(task[index]);
      if (element.id === taskId) {
        result = element;
      }
    }
    ctx.response.body = {
      ...result,
      _links: {
        self: {
          href: `http://localhost:8081/todo/${taskId}`,
        },
      },
    };
  },
};

module.exports = todoController;
