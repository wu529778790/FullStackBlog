// axiosClient.js

import axios from 'axios';

// 创建一个自定义的 Axios 实例
const axiosClient = axios.create({
    baseURL: '/', // 设置基础URL
    timeout: 5000, // 设置请求超时时间
});

// 添加请求拦截器
axiosClient.interceptors.request.use((config) => {
    // 在发送请求之前做一些处理，例如添加认证头部、处理请求参数等
    // config.headers.Authorization = 'Bearer token';
    return config;
}, (error) => {
    // 处理请求错误
    return Promise.reject(error);
});

// 添加响应拦截器
axiosClient.interceptors.response.use((response) => {
    // 在接收响应数据之前做一些处理，例如处理错误码、数据转换等
    return response.data;
}, (error) => {
    // 处理响应错误
    return Promise.reject(error);
});

export default axiosClient;
