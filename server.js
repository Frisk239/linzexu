const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// 设置静态文件目录
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname)));

// 路由处理
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/bio', (req, res) => {
  res.sendFile(path.join(__dirname, 'bio.html'));
});

// 启动服务器
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
