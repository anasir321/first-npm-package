const os = require('os');


// info about current user
const user = os.userInfo();

// getting windows info
const otherInfo = {
    name: os.type(),
    totalMem: os.totalmem(),
    freeMem: os.freemem(),
}

console.log(user);
console.log(otherInfo);