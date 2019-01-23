const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const router = require('./router');
const { PORT } = require('./config');

const app = new Koa();

// Koa middleware
app.use(bodyParser());
app.use(router.routes());

app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}.`);
  console.log('Unit Testing...');
});