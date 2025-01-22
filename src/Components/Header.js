import glob from "../Images/glob.png";
import App from "../App.css";
import Entry from "./Entry";

const Header = () => {
  return (
    <header>
      <img className src={glob} />
      <h1>Travel Journal</h1>
    </header>
  );
};

export default Header;
