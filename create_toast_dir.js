const fs = require('fs');
const path = 'D:/VS Code/zipquiz/src/components/Toast';
fs.mkdirSync(path, { recursive: true });
console.log(`Directory ${path} created.`);