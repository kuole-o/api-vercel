const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, 'public');
const source = path.join(__dirname, 'node_modules', 'guole.fun.api', 'package.json');
const destination = path.join(publicDir, 'guole.fun.api.package.json');

// 确保 public 目录存在
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir);
}

// 复制 package.json
fs.copyFile(source, destination, (err) => {
  if (err) {
    console.error('Error copying package.json:', err);
  } else {
    console.log('guole.fun.api package.json was copied to public/');
  }
});
