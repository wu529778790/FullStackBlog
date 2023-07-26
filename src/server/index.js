const express = require("express");
const ViteExpress = require("vite-express");
const cors = require("cors");
const routes = require("./router");
const apiProxy = require("./proxy");
const config = require('../../package.json')

// 配置跨域访问
const corsOptions = {
    origin: `http://localhost:${config.config.port}`, // 允许访问的域
    methods: "GET,POST", // 允许的HTTP方法
};


const app = express(cors(corsOptions));

// 将代理中间件应用于所有请求
app.use(apiProxy);

// 使用路由
app.use(routes);

ViteExpress.listen(app, config.config.port, () =>
    console.log(`http://localhost:${config.config.port}`)
);
