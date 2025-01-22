import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/Header";
import Entry from "./Components/Entry";
import paris from "./Images/paris.jpg";
import singapore from "./Images/singapour.jpg";
import korea from "./Images/korea.webp";
import Joke from "./Components/Joke";
import jokeData from "./jokeData";
import TravelData from "./TravelData";

function App() {
  // const jokeElements = jokeData.map((item, index) => {
  //   return (
  //     <Joke key={index} index={index + 1} setup={item.setup} punchline={item.punchline} />
  //   );
  // });

  const travelElements = TravelData.map((travelItem) => {
    return (
      <Entry
        image={travelItem.img}
        title={travelItem.title}
        country={travelItem.country}
        dates={travelItem.dates}
        text={travelItem.text}
      />
    );
  });

  return (
    <>
      {/* {jokeElements} */}
      <Header />
      <main className="main">{travelElements}</main>
    </>
  );
}

export default App;
