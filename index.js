// 启动脚本.js

const concurrently = require('concurrently');

concurrently([
  { command: 'cd frontend && npm run dev', name: 'frontend' },
//   { command: 'cd Node.js项目目录 && node index.js', name: 'Node.js项目' },
]);
