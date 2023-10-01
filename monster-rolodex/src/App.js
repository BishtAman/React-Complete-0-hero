import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./App.css";
import { useEffect, useState } from "react";

const App = () => {
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [newMonsters, setNewMonsters] = useState(monsters);
  const onUpdate = (event) => {
    const inputVal = event.target.value.toLocaleLowerCase();
    setSearchField(inputVal);
  };
  useEffect(()=>{
    fetch("  https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users))
      console.log('useEffect firing')
    }, [])
console.log('hey')
  useEffect(()=>{
    const newMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });
    setNewMonsters(newMonsters)
  }, [monsters, searchField])

  return (
    <>
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox onUpdate={onUpdate} />
        <CardList newMonsters={newMonsters} />
      </div>
    </>
  );
};

export default App;
