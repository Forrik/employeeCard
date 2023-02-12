import logo from "./logo.svg";
import "./App.css";
import React from "react";
import EmployeeCard from "./components/EmployeeCard";

function App() {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    fetch("https://63e79c82ac3920ad5be0b369.mockapi.io/project")
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, []);

  return (
    <div className="App">
      <div className="container">
        <div>
          <input type="text" />
        </div>
        {items.map((obj) => (
          <EmployeeCard key={obj.id} {...obj} />
        ))}
      </div>
    </div>
  );
}

export default App;
