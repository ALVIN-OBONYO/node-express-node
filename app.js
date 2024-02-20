// Global  -No window
// __dir name 

console.log(__dirname);
setInterval(()=>{
    console.log('I am Yazz Nba');
}, 20)

const name = require('./4-name')
const sayHi = require('./5-utils')

sayHi ('Yazz')
sayHi(name.john)
