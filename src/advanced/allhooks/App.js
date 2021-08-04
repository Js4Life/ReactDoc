import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Hello } from "./Hello";
import { useFetch } from "./useFetch";
import { useForm } from "./useForm";

export const AppHookz = () => {
  //  const [{ count, count2 }, setCount] = useState({ count: 10, count2: 20 });

  // const [count, setCount] = useState(10);
  // const [count2, setCount2] = useState(20);
  // const [email, setEmail] = useState("");
  // const [password, setPasswd] = useState("");

  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });
  const [showHello, setShowHello] = useState(true);
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );

  const inputRef = useRef();
  const hello = useRef(()=>console.log('heloooooooo'))



  // console.log(useFetch('http://numbersapi.com/43/trivia'))

  const { data, loading } = useFetch(`http://numbersapi.com/${count}/trivia`);

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);


  useLayoutEffect(() => {
    console.log(inputRef.current.getBoundingClientRect())
  }, [])

  // useEffect(()=>{
  //   console.log('render');
  //   const onMouseMove = e => {
  //     console.log(e)
  //   }
  //   window.addEventListener('mousemove',onMouseMove)
  //   return ()=>{
  //     console.log('unmount')
  //     window.removeEventListener('mousemove',onMouseMove)
  //   }
  // },[values.email])

  return (
    <div>
      {/* <button
        onClick={() => {
          setCount((c) => c + 1);
          setCount2((c) => c + 1);
        }}
      >
        +
      </button> */}
      {/* <div>{loading ? "loading.." : data}</div>
      <div>count:{count}</div>
      <button onClick={() => setCount((c) => c + 1)}>increment</button> */}

      {showHello && <Hello />}

      <button onClick={() => setShowHello(!showHello)}>togglee</button>

      <input
        name="email"
        value={values.email}
        onChange={handleChange}
        ref={inputRef}
      />

      <input
        name="firstName"
        placeholder="firt name"
        value={values.firstName}
        onChange={handleChange}
      />

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
      />
      <button
        onClick={() => {
          console.log(inputRef.current.focus());
          hello.current()
          
        }}
      >
        focus
      </button>
      {/* <div>count 1: {count}</div>
      <div>count 2: {count2}</div> */}
    </div>
  );
};
