
import './App.css';
import Comp from './Comp'
import AboutPage from './pages/AboutPage'; 
import ContactPage from './pages/ContactPage'; 
import ResponsiveAppBar from './ResponsiveAppBar';
import MovieDetails from './pages/Moviedetail'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {
  return (
    
      <Router>
      <ResponsiveAppBar /> 
        <Routes>
          <Route path="/" element={<Comp />} />
          <Route path="/home" element={<Comp />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          
        </Routes>
        
      </Router>
      
        
    
    
  );
}

export default App;
