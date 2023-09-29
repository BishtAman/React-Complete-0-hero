import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import './App.css'
class AppUsingClass extends Component {
  constructor() {
    super(); // #1 {this is the initial state and constructor and it will run first}
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    // #3 After initializing component the mounting will happen which rerenders the component
    fetch("  https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state.monsters);
          }
        )
      );
  }

  onUpdate = (event) => {
    const inputVal = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return { searchField: inputVal };
    });
  }

  render() {
    const { monsters, searchField } = this.state
    const { onUpdate } = this
    const newMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <>
        <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
          <SearchBox onUpdate = {onUpdate}/>
          <CardList newMonsters = {newMonsters}/>
        </div>
      </>
    );
  }
}

export default AppUsingClass;