const express = require('express');
const cors = require('cors');
const mysql = require('mysql');
const app = express();
const path = require('path');
const fs = require('fs');
const https = require('https');
app.use(cors());
// 使用 express.json() 中间件解析 JSON 请求体
app.use(express.json());

app.use(express.static(path.join(__dirname, './Frontend')));
app.get('/', (req, res) => {
    res.redirect('/mahjong/index.html');
  });
  const options = {
    key: fs.readFileSync('./key/mahjong.key'),
    cert: fs.readFileSync('./key/mahjong.crt'),
  };
  https.createServer(options, app).listen(443,()=>{console.log('Server is running on https://localhost:443');})
 
