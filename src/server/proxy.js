const { createProxyMiddleware } = require("http-proxy-middleware");

// 生成 curl 命令
function generateCurlCommand(req) {
    const { method, headers, originalUrl, body } = req;
    let curlCommand = `curl -X ${method}`;

    // 添加请求头
    for (const [key, value] of Object.entries(headers)) {
        curlCommand += ` -H "${key}: ${value}"`;
    }

    // 添加请求体
    if (method === "POST" || method === "PUT") {
        if (body) {
            curlCommand += ` -d '${JSON.stringify(body)}'`;
        }
    }

    // 添加 URL
    curlCommand += ` "http://cdn-hw-cms.shanhutech.cn${originalUrl}"`;

    return curlCommand;
}

// 创建代理中间件
const apiProxy = createProxyMiddleware("/image/proxy", {
    target: "http://cdn-hw-cms.shanhutech.cn", // 目标服务器的地址
    changeOrigin: true,
    pathRewrite: {
        "^/image/proxy": ""
    },
    onProxyReq: function (proxyReq, req) {
        const curlCommand = generateCurlCommand(req);
        console.log("Proxy Request:", curlCommand);
    }
});

module.exports = apiProxy;
