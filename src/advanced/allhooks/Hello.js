import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { useFetch } from "./useFetch";
import { useMeasure } from "./useMeasure";

export const Hello = () => {

  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  // const renders = useRef(0);
  // console.log(useFetch('http://numbersapi.com/43/trivia'))
    // console.log('hello renders',renders.current++)

  // useEffect(()=>{
  //   console.log('render hello')
  //   return ()=>{
  //     console.log('unmount')
  //   }
  // },[])



  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  // const [rect,setRect] = useState([]);

  const divRef = useRef();

  // useLayoutEffect(() => {
  //  setRect(divRef.current.getBoundingClientRect());
  // }, [data]);

  const rect = useMeasure(divRef,[data]);
  console.log('rectt',rect)

  return (
    <div>
      <div style={{ display: "flex" }}>
        <div ref={divRef}>{!data ? "loading.." : data}</div>
      </div>
      <pre>{JSON.stringify(rect,null,2)}</pre>
      <div>count:{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button>
    </div>
  );
};
