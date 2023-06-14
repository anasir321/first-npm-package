const path = require('path');
const filePath = path.join('subfolder','arham.txt');

console.log(path.sep);
console.log(filePath);

const base = path.basename(filePath)
console.log(base);

const absolute = path.resolve(__dirname, 'subfolder', 'arham.txt');
console.log(absolute);