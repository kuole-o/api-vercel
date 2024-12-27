const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const source = path.join(__dirname, 'node_modules', 'guole.fun.api', 'package.json');
const destination = path.join(publicDir, 'guole.fun.api.package.json');

// 确保 public 目录存在
fs.promises.mkdir(publicDir, { recursive: true })
  .then(() => {
    // 复制 package.json
    return fs.promises.copyFile(source, destination);
  })
  .then(() => {
    console.log('guole.fun.api package.json was copied to public/');
  })
  .catch((err) => {
    console.error('Error:', err);
  });