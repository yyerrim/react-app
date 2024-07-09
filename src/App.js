import logo from './logo.svg';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import Alert from 'react-bootstrap/Alert';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <h1>Hello</h1>
      {/* 작성된 코드가 html 같지만 모습을 흉내만 낸 jsx 코드임 */}

      <Alert variant={"warning"}>
        This is a warning alert—check it out!
      </Alert>
    </div>
  );
}

export default App;
