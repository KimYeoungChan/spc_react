import React from 'react'

function ContainerApp(props) {
  console.log(props);

  return (
    <div className='container'>
      {props.children}
    </div>
  )
}

export default ContainerApp