import React, { use } from 'react'

function Users({ fetchUser }) {
  const data = use(fetchUser);
  // console.log(data[0].name);

  return (
    <div>
      <h3>Users: </h3>
      {data.map(name =>  <li> { name.name} </li>  )}
    </div>
  )
}

export default Users
