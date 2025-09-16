import { lazy, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo';
import Actor from './Actor';
import Singer from './Singer';
function App() {
  // const time = 50;
  // const actors = ['Bappa Raj', 'Omar Sunny', 'Salman Shah', 'Jasim', 'Anwar'];

  // const singers = [
  //   {id: 1, name: 'Sajib', age: 25},
  //   {id: 2, name: 'rajib', age: 20},
  //   {id: 3, name: 'rahat', age: 32}
  // ];

  // function handle() {
  //   alert('i am clicked');
  // }

  // let handle2 = () => {
  //  alert('i am clicked3');
  // }

  // let handle3 = (input) => {
  //     alert(input);
  // }


  let [count, setCount] = useState(0);
  let [six, setSix] = useState(0);


  let test = () => {
    console.log('me');
    let newCount = count + 6;
    setCount(newCount);

    let newSix = six + 1;
    setSix(newSix);
  }

  return (
    <>
      <h1>Vite + React {count}</h1>
      <h2>six count {six > 4 && six  }  </h2>

      <button onClick={test}> Click </button>
      {/* <button onClick={handle}>   click </button>
      <button onClick={handle2}>   click 2 </button>
      <button onClick={ () => alert('i am click 3')}>   click 3 </button>

      <button onClick={ () => handle3('hello') }>   click 4 </button> */}

    </>
  )
}

export default App
