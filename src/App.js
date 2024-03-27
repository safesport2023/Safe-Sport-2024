import React, { useRef, useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
import Home from './pages/Home';
import FAQ from './pages/FAQ';

import EducationPage from './pages/EducationPage';
import Resources from './pages/Resources';
import Header from './components/Header';
import HeroMsg from './pages/HeroMsg';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.css';
// import MobileMenu from './components/MobileMenu';


Amplify.configure(awsExports);




function App() {

  // State to manage the visibility of the mobile menu
  const [mobileMenuVisible, setMobileMenuVisible] = React.useState(false);

  // Function to toggle the visibility of the mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuVisible(!mobileMenuVisible);
  };
  //language handler 
  const [language, setLanguage] = useState('english'); // Default language is English


  // Define video URLs based on the selected language

  const toggleLanguage = () => {
    // Toggle between English and French
    setLanguage(prevLanguage => prevLanguage === 'english' ? 'french' : 'english');
    console.log('Language change from header:', language);
  };




  return (
    <div className="App">

      <div className='background-div'>
        <div className='lang-button-div'>
          <button className='mobile-btn-lang' onClick={toggleLanguage}>{language === 'english' ? 'Passer au Français' : 'Switch to English'}</button>
        </div>

        <Router>
          <Header />
          <div className="content-desktop">
            <NavLink className="content-link" exact activeClassName="active" to="/">{language === 'english' ? 'Home' : 'Maison'}</NavLink>
            <NavLink className="content-link" activeClassName="active" to="/education">{language === 'english' ? 'Education' : 'Éducation'}</NavLink>
            <NavLink className="content-link" activeClassName="active" to="/HeroMsg">{language === 'english' ? 'Testimonials' : 'Témoignages'}</NavLink>
            <NavLink className="content-link" activeClassName="active" to="/Resources">{language === 'english' ? 'Resources' : 'Ressources'}</NavLink>
            <NavLink className="content-link" activeClassName="active" to="/FAQ">{language === 'english' ? 'FAQs' : 'FAQs'}</NavLink>

          </div>
          <div className="content-mobile">
            <button className="hamburger" onClick={toggleMobileMenu}>
              ☰
            </button>
            <div className={`mobile-menu ${mobileMenuVisible ? 'visible' : ''}`}>
              <NavLink className="content-link" exact activeClassName="active" to="/">{language === 'english' ? 'Home' : 'Maison'}</NavLink>
              <NavLink className="content-link" activeClassName="active" to="/education">{language === 'english' ? 'Education' : 'Éducation'}</NavLink>
              <NavLink className="content-link" activeClassName="active" to="/HeroMsg">{language === 'english' ? 'Testimonials' : 'Témoignages'}</NavLink>
              <NavLink className="content-link" activeClassName="active" to="/Resources">{language === 'english' ? 'Resources' : 'Ressources'}</NavLink>
              <NavLink className="content-link" activeClassName="active" to="/FAQ">{language === 'english' ? 'FAQs' : 'FAQs'}</NavLink>

            </div>

          </div>


          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/FAQ" element={<FAQ />}></Route>
            <Route path="/education" element={<EducationPage />}></Route>
            <Route path="/HeroMsg" element={<HeroMsg />}></Route>
            <Route path="/Resources" element={<Resources />}></Route>

          </Routes>
          <Footer />
        </Router>
      </div>
    </div>
  );
}

export default App;






