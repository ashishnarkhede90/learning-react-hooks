import React, { useState } from "react";
import useFetch from "./useFetch";

export const Joke = props => {
  console.log(props);
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

  // const [counter, setCounter] = useState(0);

  const { data, loading } = useFetch(
    `https://api.chucknorris.io/jokes/random?category=${
      jokeCategories[props.counter]
    }`
  );

  console.log(data);
  if (data && data.status === 404) {
    // log error
    console.error(data);
  }

  return (
    <React.Fragment>
      {/* <button onClick={() => setCounter(counter + 1)}>
        Increment: {counter}
      </button> */}

      {loading ? (
        <React.Fragment>
          <p>[...]</p>
          <p>Loading...</p>
        </React.Fragment>
      ) : data.value ? (
        <React.Fragment>
          <p>[{data.categories[0]}]</p>
          <p>{data.value}</p>
        </React.Fragment>
      ) : (
        <p>Not found</p>
      )}
    </React.Fragment>
  );
};
