import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
  const isCurrent = useRef(true);
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    return () => {
      isCurrent.current = false;
    };
  },[]);

  useEffect(() => {
    setState({ data: state.data, loading: true });
    fetch(url)
      .then((x) => x.text())
      .then((y) => {
     //   console.log(y);
        // setTimeout(() => {
          if (isCurrent.current) {
            setState({ data: y, loading: false });
          }
        // }, 2000);
      });
  }, [url, setState]);

  return state;
};
