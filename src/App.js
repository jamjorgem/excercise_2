import logo from './logo.svg';
import './App.css';
import Clockf from './components/clockf';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clockf></Clockf>
      </header>
    </div>
  );
}

export default App;
