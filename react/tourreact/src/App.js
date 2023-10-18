import './App.css';
import Footer from './Components/Additional/Footer';
import ListOfBus from './Components/Pages/Lists/ListOfBus';
import ListOfCompanyBus from './Components/Pages/Lists/ListOfCompanyBus';
import ListOfGuide from './Components/Pages/Lists/ListOfGuide';
import ListOfMuseum from './Components/Pages/Lists/ListOfMuseum';
import ListOfTour from './Components/Pages/Lists/ListOfTour';
import ListOfRestorant from './Components/Pages/Lists/ListOfRestorant';

function App() {
  return (
    <div className="App">
      <h3>Пока что без меню, когда нить тут оно будет</h3>
      <ListOfRestorant />
      <Footer />
    </div>
  );
}

export default App;
