import logo from "../logo.svg";
import "../App.css";
import Home from "./Home";
import Example from "./Example";

function App() {
  const names = ["Tony", "Blair", "Maina", "Mwangi", "Jesus"];

  const students = [
    {
      firstName: "Billy",
      lastName: "Goat",
      id: 1,
    },
    {
      firstName: "Bonnie",
      lastName: "Black",
      id: 2,
    },
    {
      firstName: "Pink",
      lastName: "Panther",
      id: 3,
    },
  ];

  return (
    <div className="">
      <Home names={names} />
      <Example students={students} />
    </div>
  );
}

export default App;
