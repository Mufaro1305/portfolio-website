import Intro from './components/Intro';
import './App.css';
import About from './components/about/About';
import Reason from './components/reason/Reason';
function App() {
  return (
    <div className="App">
      <Intro/>
      <About/>
      <Reason/>
    </div>
  );
}

export default App;
