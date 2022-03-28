import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Hooks from './Hooks';
import reportWebVitals from './reportWebVitals';

const lakes =["hello","yes","no"];
const lakeList = [{id:"1",name:"jahnavi",age:22,college:"SU"},
{id:"2",name:"Ma",age:22,college:"SU"}];
const numbers = [1,2,3,4,5];
const [first,secong,third] = ["popcorn","coke","candy"]
console.log(first);
const snacks = ["popcorn","coke","candy"]
console.log(snacks[0])

ReactDOM.render(
  
  <React.StrictMode>
    <App lakes={lakeList} lists={lakes} numbers={numbers}/>
    <Hooks/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
