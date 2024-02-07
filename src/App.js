import React from 'react';
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




  return (
    <div className="App">
      <div className='background-div'>

        <Router>
          <Header />
          <div className="content-desktop">
            <NavLink className="content-link" exact activeClassName="active" to="/">Home</NavLink>

            <NavLink className="content-link" activeClassName="active" to="/education">Education</NavLink>
            <NavLink className="content-link" activeClassName="active" to="/HeroMsg">Hear From Your Heroes</NavLink>
            <NavLink className="content-link" activeClassName="active" to="/Resources">Resources and Support</NavLink>
            <NavLink className="content-link" activeClassName="active" to="/FAQ">FAQs</NavLink>

          </div>
          <div className="content-mobile">
            <button className="hamburger" onClick={toggleMobileMenu}>
              ☰
            </button>
            <div className={`mobile-menu ${mobileMenuVisible ? 'visible' : ''}`}>
              <NavLink className="content-link" exact activeClassName="active" to="/">Home</NavLink>
              <NavLink className="content-link" activeClassName="active" to="/education">Education</NavLink>
              <NavLink className="content-link" activeClassName="active" to="/HeroMsg">Hear From Your Heroes</NavLink>
              <NavLink className="content-link" activeClassName="active" to="/Resources">Resources and Support</NavLink>
              <NavLink className="content-link" activeClassName="active" to="/FAQ">Frequently Asked Questions</NavLink>

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






