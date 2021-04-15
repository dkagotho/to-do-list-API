const { Application } = require("@curveball/core");
const accessLog = require("@curveball/accesslog").default;

const problem = require("@curveball/problem").default;
const bodyParser = require("@curveball/bodyparser").default;
const routes = require("./routes");

const app = new Application();

// The accesslog middleware shows all requests and responses on the cli.
app.use(accessLog());
console.log(accessLog);
// The problem middleware turns exceptions into application/problem+json error
// responses.
app.use(problem());

// The bodyparser middleware is responsible for parsing JSON and url-encoded
// request bodies, and populate ctx.request.body.
app.use(bodyParser());

app.use(...routes);

app.listen(8081);
