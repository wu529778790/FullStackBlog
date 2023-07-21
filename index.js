// 启动脚本.js

const concurrently = require('concurrently');

concurrently([
  { command: 'cd frontend && npm run dev', name: 'frontend' },
  { command: 'cd backend && node run start:dev', name: 'backend' },
]);
