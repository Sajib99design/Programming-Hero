//  export default function Todo({task, isDone}) {
//     return (
//         <div>
//             <p>Todo Apps Task </p>
//             <li > 1 {task}</li>
//         </div>
//     )
// }


// if conditoin
// export default function Todo({task, isDone, time}) {
//    if (isDone) {
//     return (
//         <li>Done : {task} {time} </li>
//     )
//    }else{
//     return (
//         <li>Pending: {task} {time}</li>
//     )
//    }
// }



// step -3
// ternary operator
// export default function Todo({task, isDone, time= 0}) {
//     return isDone ? <li> Done: {task} {time} </li> : <li> Not Done : {task}</li>
// }



//  conditional rendering : 4 &&
// export default function Todo({task, isDone, time= 0}) {
//     return isDone && <li>Done Tasks: {task} time : {time}</li>
// }


//   conditional rendering : 5 ||
// export default function Todo({task, isDone, time= 0}) {
//     return isDone || <li> Not Done Tasks: {task} time : {time}</li>
// }




//   conditional rendering : 6 use variable
export default function Todo({task, isDone, time}) {
    let listItem ;
   if (isDone) {
      listItem =  <li>Done : {task} {time} </li>
   }
   else{
      listItem =  <li>Pending: {task} {time}</li>
   };
   return listItem;
}
