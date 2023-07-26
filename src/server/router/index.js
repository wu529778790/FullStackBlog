const express = require("express");
const router = express.Router();
const image = require("./image");

// 组合路由
router.use("/image", image);

module.exports = router;
