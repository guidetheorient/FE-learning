//main.js 
const greeter = require('./Greeter.js');
document.querySelector("#root").appendChild(greeter());

//通过npm run webpack main.js bundle.js
//生成bundle.js
//npm run webpack需要先在package.json中的scripts设置好