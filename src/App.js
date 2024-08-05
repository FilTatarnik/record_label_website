import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navbar />
        <h1>Record Label</h1>
        <body>This is where an about the label, our artists and snippets of songs will be.</body>
        <footer>Footer</footer>
      </header>
    </div>
  );
}

export default App;
