import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo';
function App() {
  const time = 50;
  return (
    <>
      <h1>Vite + React</h1>
      <Person />
    <Todo task='Lear Ract' isDone={true} time={time} />
    {/* <Todo task='Lear java' isDone={true} time={time}/>
    <Todo task='Revisiton' isDone={false} time='30' /> */}
      {/* <Person />
      <Sports />
      <Developer name='shabana' cate='java' />
      <Developer name='sajib' cate='java2'/>
      <Developer name='rajib' cate='java3'/>
      <Player name='Tamim' run='6000'  /> */}
    </>
  )
}

function Person() {
  let age = 25;
  return (
    <h2>I am sajib  {age} </h2>
  )
}

function Sports() {
  const sportStyle = {
    color: 'red',
    border: '2px solid blue'
  }
  return (
    <div style={sportStyle}>
      <h4>Cricket</h4>
      <p>playing and losing</p>
    </div>
  )
}

function Developer(props) {
  console.log(props);
  return (
    <div style={{ color: 'blue', border: '2px solid red' }}>
      <h3>Developer her name : {props.name}</h3>
      <p>Developer on : {props.cate}</p>
    </div>
  )
}

function Player ({name, run}) {
 return (
  <div>
    <h3>Name : {name} </h3>
    <p>Runs : {run} </p>
  </div>
 )
}

export default App
