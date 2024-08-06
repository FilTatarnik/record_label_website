import Navbar from './components/Navbar';
import Mainpage from './components/Mainpage';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <Mainpage />
      </header>
    </div>
  );
}

export default App;
