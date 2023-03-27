import logo from "./logo.svg";
import leaningTower from "./images/pisa.jpg";
import "./App.css";
import ButtonComponent from "./components/ButtonComponent";
import ImageComponent from "./components/ImageComponent";

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
        <ButtonComponent text="Click here!" fSize="2" bgColor="purple" borderCol="violet" />
        <ButtonComponent text="Mind the gap" fSize="1" bgColor="blue" borderCol="red" color="white" />
        <ImageComponent src={leaningTower} alt="Leaning Tower" width="300px" height="150px" />
        <ImageComponent
          src="https://www.toscana.info/wp-content/uploads/sites/123/piombino-mare-hd.jpg"
          alt="Piombino"
          width="300px"
          height="150px"
        />
      </header>
    </div>
  );
}

export default App;
