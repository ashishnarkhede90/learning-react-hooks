/* React function component - Implementation of counter
 */

import React, { useState, useEffect } from "react";

export const FunctionCounter = () => {
  const [isLoading, setIsLoading] = useState(true);
  // state hook for fun counter
  const [funCounterState, setFunCounterState] = useState({
    counter: 0
  });

  const [joke, setJoke] = useState({ text: "", category: "" });

  // effect hook
  useEffect(() => {
    console.log("funCounter updated...");
    const jokeCategories = {
      0: "animal",
      1: "career",
      2: "celebrity",
      3: "dev",
      4: "explicit",
      5: "fashion",
      6: "food",
      7: "history",
      8: "money",
      9: "movie",
      10: "music",
      11: "political",
      12: "religion",
      13: "science",
      14: "sport",
      15: "travel"
    };
    // call API to fetch fun fact
    const fetchData = () => {
      fetch(
        `https://api.chucknorris.io/jokes/random?category=${
          jokeCategories[funCounterState.counter]
        }`
      )
        .then(response => response.json())
        .then(data => {
          console.log(data);
          setIsLoading(false);
          if (data.status !== 404)
            setJoke({ category: data.categories[0], text: data.value });
          else setJoke({ category: "Unknown", text: "Not found" });
        });
    };

    try {
      setIsLoading(true);
      fetchData();
    } catch (err) {
      console.error(err);
    }

    //return cleanup function if needed
  }, [funCounterState.counter]); // run this effect when funCounterState is updated

  // state hook for dumb counter
  const [counterState, setCounterState] = useState({
    counter: 0,
    message: "Hello World!"
  });

  return (
    <React.Fragment>
      <h3>Counter implementation using React Function component</h3>

      <div>
        <h4>Dumb Counter</h4>
        <button
          onClick={() =>
            setCounterState({
              ...counterState,
              counter: counterState.counter + 1
            })
          }
        >
          {counterState.counter}
        </button>
        <p>{counterState.message}</p>
      </div>

      <div>
        <h4>Fun Counter</h4>

        <button
          onClick={() =>
            setFunCounterState({ counter: funCounterState.counter - 1 })
          }
        >
          -
        </button>
        {funCounterState.counter}
        <button
          onClick={() =>
            setFunCounterState({
              ...funCounterState,
              counter: funCounterState.counter + 1
            })
          }
        >
          +
        </button>

        <p>[{isLoading ? "..." : joke.category}]</p>
        <p>{isLoading ? "Loading..." : joke.text}</p>
      </div>
    </React.Fragment>
  );
};
