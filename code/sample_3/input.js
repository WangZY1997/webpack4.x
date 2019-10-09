const good  = 'hello';
import img1 from './img/logo.png'
import img2 from './img/ad_.jpg'
import HelloReact from './HelloReact.jsx'
import ReactDom from 'react-dom'
import React from 'react'

import './test.scss'

// async function sayhello(){
//     const result = await fetch('https://www.daidu.com');
//     console.log(result);
// }
// sayhello();
ReactDom.render(<HelloReact/>,document.getElementById('good'))