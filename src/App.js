import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './compenents/Header'; 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import FormApp from './FormApp';
import Home from './Home';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/form" element={<FormApp />} />
        <Route path="/home" element={<Home />} />
        {/* Autres routes */}
      </Routes>
    </Router>
  );
};

export default App;
