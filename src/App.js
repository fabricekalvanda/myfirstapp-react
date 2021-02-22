import logo from './logo.svg';
import { Greeting } from "./Greeting";
import './App.css';


function App() {
    let adjective = 'awesome';
    let url = 'https://reactjs.org';

  return (
    <div className="App">
      <header className="App-header">
        < Greeting person={{name:"Farice", numberOfMessages: 11 }} 
        name="Fabrice" numberOfMessages={89} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This very {adjective} for me!!!
        </p>

        <a
          className="App-link"
          href= {url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
