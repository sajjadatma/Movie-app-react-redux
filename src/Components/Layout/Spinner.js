import React from 'react'
import spinner from './spinner.gif'

function Spinner() {
  return (
    <div className="h-100 d-flex">
      <img
        src={spinner}
        style={{ width: '200px', margin: 'auto', display: 'block' }}
        alt="Loading..."
      />
    </div>
  )
}

export default Spinner
