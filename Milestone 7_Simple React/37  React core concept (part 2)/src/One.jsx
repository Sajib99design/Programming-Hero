import React from 'react'

function One({data}) {
  return (
    <div>
      <p style={ {textAlign: 'right'}  }>friends name: {data.name} </p>
    </div>
  )
}

export default One
