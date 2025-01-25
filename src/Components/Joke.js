import { useState } from "react";
import jokeData from "../jokeData";

// console.log(jokeData);

const Joke = ({ index, setup, punchline }) => {
  const [isShown, setisShown] = useState(true);

  const toggleShown = () => {
     setisShown(preShown => !preShown);
  };

  return (
    <>
      <h2>
         {index} : {setup}
      </h2>
      {!isShown && <p> {punchline}</p>}
      {<button onClick={toggleShown}>{isShown ? "Show" : "Hide"} Punchline</button>}
      <hr />
    </>
  );
};

export default Joke;
