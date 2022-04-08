import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Certificate from './components/Certificate';
import PrimaryPage from './components/PrimaryPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<PrimaryPage/>} />
          <Route exact path='/certificate' element={<Certificate/>} />
        </Routes>
      </div>
    </Router>
    
  );
}

export default App;
