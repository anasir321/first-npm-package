const { readFile, writeFile } = require('fs');

readFile('./test.txt','utf8',(err, result) => {
    if(err){
        console.log(err);
        return
    }
    console.log(result);
})
