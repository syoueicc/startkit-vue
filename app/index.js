const koa = require("koa");
const path = require("path");
const render = require("koa-ejs");
const serve = require('koa-static');
const session = require('koa-session');
const bodyparser = require("koa-bodyparser");
const router = require("./routes");

const app = koa();

app.keys = ['come on baby fuck me'];
app.use(session(app));
app.use(bodyparser());

render(app, {
	root: path.join( path.join(__dirname, "views") ),
	layout: false
});

app.use( serve( path.join(__dirname, '../public') ) );

app.use(router.routes());

const port = 9517;
const host = "0.0.0.0";

app.listen(port, host, ()=>console.log(`app listening ${host} on port: ${port}`))