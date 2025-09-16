import React, { use } from 'react'
import One from './One';

function Friend({fetchPromise}) {

  const data =  use(fetchPromise);
  console.log(data);
  return (
    <div>
      <h3>Frieds: {data.map( data => <One data={data} />  ) } </h3>
    </div>
  )
}

export default Friend
