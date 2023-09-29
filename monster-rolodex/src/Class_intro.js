import logo from './logo.svg';
import './App.css';
import { Component } from 'react'
class App extends Component {
  constructor(){
    super();
    // this.state = {
    //   name: "Aman",
    //   lastname: "Bisht",
    //   address: {country: "India", city: "Haridwar"}
    // }
    this.state = {
      count: 0
    }
  }
  render(){
    return (
      <>
        <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {this.state.count}
          </a>
          <button onClick={()=>{
            this.setState((state)=>{
              return { count: state.count + 1}
            },
            ()=>{
            })
              console.log(this.state.count)
          }}>
            Change Counter
          </button>
        </header>
      </div>
      {/* <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hey {this.state.name} {this.state.lastname}. I'm from {this.state.address.country} {this.state.address.city}
          </a>
          <button onClick={()=>{
            this.setState({name: "Albert", lastname: "Einstien", address: {country: "USA", city: "New York"}})
          }}>
            Change Name
          </button>
        </header>
      </div> */}
      </>
    );
  }
}

export default App;
