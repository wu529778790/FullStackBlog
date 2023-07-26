const express = require("express");
const router = express.Router();
const NodeCache = require("node-cache");
const request = require("../utils/request");

// 创建一个缓存实例
const cache = new NodeCache();

// 定义路由处理程序
router.get("/birdpaper", async (req, res) => {
    // 检查缓存中是否有数据
    const cachedData = cache.get("birdpaper");
    if (cachedData) {
    // 如果有缓存数据，则直接返回缓存的数据
        res.json(cachedData);
    } else {
        const url = 'http://wp.birdpaper.com.cn/intf/GetListByCategory?cids=36&pageno=0&count=10';
        try {
            const data = await request(url);
            // 将数据存入缓存，缓存时间为 1 小时
            cache.set("birdpaper", data, 3600);
            res.json(data);
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }
});

module.exports = router;
