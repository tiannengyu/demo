/*
 * @Author: aneng
 * @Date: 2018-12-28 15:06:39
 * @Last Modified by: aneng
 * @Last Modified time: 2019-01-08 19:08:44
 */

const Koa = require('koa');

const app = new Koa();

const compose = require('koa-compose');

const bodyParser = require('koa-bodyparser')();

const routeHandler = require('./routes');

const middlewareHandler = require('./middleware');

const middlewares = compose([middlewareHandler, bodyParser, routeHandler]);

app.use(middlewares);

app.listen(6666);
