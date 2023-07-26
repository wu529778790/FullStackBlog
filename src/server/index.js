const express = require("express");
const ViteExpress = require("vite-express");
const routes = require("./router");
const config = require('../../package.json')

const app = express();

// 使用路由
app.use(routes);

ViteExpress.listen(app, config.config.port, () =>
    console.log(`http://localhost:${config.config.port}`)
);
