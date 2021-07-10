import React from 'react'

const NumberList = (props) => {
  const numbers = props.numbers;
  const listItems = numbers.map((num)=> 
  <li key={num.toString()} >
    {num}
    </li>
  )
  return (
    <div>
      <ul>{listItems}</ul>
    </div>


  )
}

export default NumberList
