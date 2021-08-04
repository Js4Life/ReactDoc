import React, { useContext, useState, useEffect } from "react";
import { ThemeContext } from "../theme-context";

// func
export const Greetingz = () => {
  const name = useFormInput("Mary");
  const surname = useFormInput("Poppins");

  // const [surname, setSurname] = useState("Poppins");

  const theme = useContext(ThemeContext);

  useDocTitle(name.value + " " + surname.value);

  const width = useWindowWidth(); // custom hook

  console.log(theme);

  // function handleSurnameChange(e) {
  //   setSurname(e.target.value);
  // }

  return (
    <div style={{ color: theme }}>
      custom hook Name : <input {...name} />
      Surname : <input {...surname} />
      <label>width f:{width}</label>
      {/* NAME : <input value={name} onChange={handleNameChange} />
         Surname : <input value={surname} onChange={handleSurnameChange} />
         <label>width f:{width}</label> */}
    </div>
  );
};

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange,
  };
}

function useDocTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    // retun a function to unsub --clean up compenentwillunwont like in clss
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });
  return width;
}
