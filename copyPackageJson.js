const fs = require('fs');
const path = require('path');

const source = path.join(__dirname, 'node_modules', 'guole.fun.api', 'package.json');
const destination = path.join(__dirname, 'public', 'guole.fun.api.package.json');

fs.copyFile(source, destination, (err) => {
  if (err) {
    console.error('Error copying package.json:', err);
  } else {
    console.log('guole.fun.api package.json was copied to public/');
  }
});
