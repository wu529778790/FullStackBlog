const express = require("express");
const ViteExpress = require("vite-express");

const app = express();
// 封装请求方法
async function fetchData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error('请求数据失败');
  }
}

// 路由处理程序
app.get("/api/birdpaper", async (req, res) => {
  const url = 'http://wp.birdpaper.com.cn/intf/GetListByCategory?cids=36&pageno=0&count=10';
  try {
    const data = await fetchData(url);
    res.json(data);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

ViteExpress.listen(app, 3000, () =>
  console.log(`http://localhost:3000`)
);
