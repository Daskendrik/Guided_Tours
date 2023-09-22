import './App.css';
import FormApplet from './Components/FormApplets/FormApplet';
import ListApplet from './Components/ListApplets/ListApplet';

function App() {
  return (
    <div className="App">
      <h3>Home</h3>
      <ListApplet />
      <FormApplet />
    </div>
  );
}

export default App;
