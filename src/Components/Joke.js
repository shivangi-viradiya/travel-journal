import jokeData from "../jokeData";

console.log(jokeData);

const Joke = ({ index, setup, punchline }) => {
  return (
    <>
      <h2>
        SetUp {index} : {setup}
      </h2>
      <p>Punchline: {punchline}</p>
      <hr />
    </>
  );
};

export default Joke;
