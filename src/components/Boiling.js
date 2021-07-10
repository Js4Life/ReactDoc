import React from 'react'

function BoilingVerdict(props) {
  if(props.celsius >= 100) {
    return <p>The Water would boil</p>
  }
  return <p>The water not boild</p>
}

export default BoilingVerdict