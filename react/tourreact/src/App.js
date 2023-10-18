import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Layout from './Components/Additional/Layout';
import Calendar from './Components/Additional/Calendar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Calendar />} />
            <Route path="*" element={<h3>Такого пункта неть</h3>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
