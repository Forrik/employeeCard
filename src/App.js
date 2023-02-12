import logo from "./logo.svg";
import "./App.css";
import React from "react";
import EmployeeCard from "./components/EmployeeCard";
import Search from "./components/Search";

function App() {
  const [searchValue, setSearchValue] = React.useState("");
  const [items, setItems] = React.useState([]);
  const search = searchValue ? `search=${searchValue}` : "";
  React.useEffect(() => {
    fetch(`https://63e79c82ac3920ad5be0b369.mockapi.io/project?${search}`)
      .then((res) => {
        return res.json();
      })
      .then((arr) => {
        setItems(arr);
      });
  }, [searchValue]);

  return (
    <div className="App">
      <div className="container">
        <div>
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
        </div>
        {items
          .filter((obj) => {
            if (obj.name.toLowerCase().includes(searchValue.toLowerCase())) {
              return true;
            }
            return false;
          })
          .map((obj) => (
            <EmployeeCard key={obj.id} {...obj} />
          ))}
      </div>
    </div>
  );
}

export default App;
