
const axios = require('axios');
// 封装请求方法
async function request(url) {
    try {
        const res = await axios.get(url);
        return res.data;
    } catch (error) {
        console.error(error);
        throw new Error('请求数据失败');
    }
}

module.exports = request;