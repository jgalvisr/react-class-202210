import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.scss';
import { ThemeContext, themes, ThemeContextProvider } from '../contexts/ThemeContext';

export const NavBar = () => {

  const theme = useContext(ThemeContext);
  console.log(theme);

  const handleClick = () => {
    setTheme();
  }
  return (
    <nav className={theme === themes.light ? 'navbar navbar-expand-lg navbar-light bg-light' : 'navbar navbar-expand-lg navbar-dark bg-dark'}>
      <a className='navbar-brand' href='#main'>
        ISIS3710
      </a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarNav'
        aria-controls='navbarNav'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse' id='navbarNav'>
        <ul className='navbar-nav me-auto'>
          <li className='nav-item active'>
            <Link className='nav-link' to='/gallery'>
              Gallery
            </Link>
          </li>
          <li className='nav-item'>
            <Link className='nav-link' to='/contact-form'>
              Contact
            </Link>
          </li>
        </ul>
        <ul className='navbar-nav'>
          <li>
            <label className="switch">
              <input type="checkbox" onClick={handleClick}/>
              <span className="slider round"></span>
            </label>
          </li>
        </ul>
      </div>
    </nav>
  );
};
