import React, { useRef } from 'react'
import { useCountRenders } from './useCountRenders'

export const Squarez = React.memo(({n,increment}) => {
  // const renders = useRef(0);
  // console.log('render helllo',renders.current)
  useCountRenders()
  return (
    <button onClick={()=>increment(n)}>
      {n}
    </button>
  )
})