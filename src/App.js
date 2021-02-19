import logo from './logo.svg';
import './App.css';

function App() {

  let greetingElement = (new Date()).getHours() < 12
    ? <h3>Good Morning!</h3>
    : <h3>Good Evening!</h3>;

    let adjective = 'awesome';
    let url = 'https://reactjs.org';
  return (
    <div className="App">
      <header className="App-header">
        {greetingElement}
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
