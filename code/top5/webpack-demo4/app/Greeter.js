// // var config = require('./config.json')
// import config from './config.json'
// import React,{Component} from 'react'

// // module.exports = function(){
// //   var greet = document.createElement('div')
// //   greet.textContent = config.greetText
// //   return greet
// // }
// class Greet extends Component{
//   render(){
//     return(
//       <div>{config.greetText}</div>
//     )
//   }
// }
// export default Greet

import React, {Component} from 'react'
import config from './config.json';

class Greeter extends Component{
  render() {
    return (
      <div>
        {config.greetText}
      </div>
    );
  }
}

export default Greeter