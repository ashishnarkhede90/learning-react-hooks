import { useState, useEffect } from "react";

// custom hook is a function whose name starts with "use" and that may call other hooks
// below is a custom hook to fetch data given the url
const useFetch = url => {
  const [state, setState] = useState({ data: null, loading: true });

  useEffect(() => {
    setState(state => ({ data: state.data, loading: true }));

    fetch(url)
      .then(res => res.json())
      .then(jsonRes => setState({ data: jsonRes, loading: false }));
  }, [url, setState]);

  return state;
};

export default useFetch;
