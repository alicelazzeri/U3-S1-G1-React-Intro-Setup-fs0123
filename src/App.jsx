import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>{" "}
        <ButtonComponent text="Click here!" />
        <ButtonComponent text="Mind the gap" />
      </header>
    </div>
  );
}

export default App;