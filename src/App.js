import './App.scss';
import React from 'react';
import { ContactForm } from './pages/ContactForm';
import { NavBar } from './components/NavBar';
import { Gallery } from './pages/Gallery';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeContextProvider } from './contexts/ThemeContext';

function App() {


  return (
    <>
      <ThemeContextProvider>
        <Router>
          <NavBar></NavBar>
          <Routes>
            <Route
              exact
              path='/gallery'
              element={<Gallery></Gallery>}
            />
            <Route
              exact
              path='/contact-form'
              element={<ContactForm></ContactForm>}
            />
          </Routes>
        </Router>
      </ThemeContextProvider>
    </>
  );
}

export default App;
