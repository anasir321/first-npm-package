const { readFileSync, writeFileSync } = require('fs');

const first = readFileSync('test.txt','utf8'); //the second parameter is encoding
const second = readFileSync('test2.txt','utf8');

console.log(first, second);

writeFileSync(
    'result.txt',
    `Here is the result of the two file(this is created automatically): ${first} + ${second}`,
    {flag: 'a'} //  appending in the same file
);

