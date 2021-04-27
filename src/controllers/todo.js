const Controller = require("@curveball/controller");
const { Context } = require("@curveball/core");

task = [];
lastTaskId = 0;

const todoController = {
  get(ctx) {
    ctx.response.type = "application/json";
    ctx.response.body = {
      task,
      _links: {
        self: {
          href: "http://localhost:8081/todo",
        },
      },
    };
  },
  update(ctx) {
    for (let index = 0; index < task.length; index++) {
      if (task[index].name === ctx.request.query.name) {
        task[index].completed = true;
        ctx.response.body = {
          task,
          _links: {
            self: {
              href: "http://localhost:8081/todo/update",
            },
          },
        };
      }
    }
  },
  delete(ctx) {
    for (let index = 0; index < task.length; index++) {
      if (task[index].name === ctx.request.query.name) {
        task[index].deleted = true;
        ctx.response.body = {
          task,
          _links: {
            self: {
              href: "http://localhost:8081/todo/delete",
            },
          },
        };
      }
    }
  },
  add(ctx) {
    //add id to the new task
    var taskName = ctx.request.query.name;
    if (taskName) {
      task.push({
        id: ++lastTaskId,
        name: taskName,
        completed: false,
      });
    }
    ctx.response.body = {
      task,
      _links: {
        self: {
          href: "http://localhost:8081/todo/add",
        },
      },
    };
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
      result,
      _links: {
        self: {
          href: `http://localhost:8081/todo/${taskId}`,
        },
      },
    };
  },
};

module.exports = todoController;
