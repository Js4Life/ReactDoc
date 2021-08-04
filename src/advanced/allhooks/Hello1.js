import React, { useRef } from 'react'
import { useCountRenders } from './useCountRenders'

export const Hello1 = React.memo(({increment}) => {
  // const renders = useRef(0);
  // console.log('render helllo',renders.current)
  useCountRenders()
  return (
    <button onClick={()=>increment(5)}>
      Hello1
    </button>
  )
})
