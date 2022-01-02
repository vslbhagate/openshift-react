import logo from './logo.svg';
import './App.css';
import Config from "./config.json";

function App() {
  const environment = Config.ENV;
  const baseUrl = Config.BASE_URL;
  return (
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
          Learn React
        </a>
        <p>Environment123: { environment }</p>
      <p>Base Url: { baseUrl }</p>
      <p>${process.env.MY_POD_NAME}</p>
      </header>
    </div>
  );
}

export default App;
