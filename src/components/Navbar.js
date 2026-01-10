import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Navbar(props) {
  const activeStyle = {
    textDecoration: 'underline',
    textUnderlineOffset: '6px',
    fontWeight: '500',
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/">{props.title}</NavLink>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}> Home </NavLink>
              </li>

              <li className="nav-item">
                <NavLink to="/about" className="nav-link" style={({ isActive }) => (isActive ? activeStyle : undefined)}> About </NavLink>
              </li>
            </ul>

            <div className="d-flex align-items-center">
              <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
                <input className="form-check-input" type="checkbox" role="switch" id="modeSwitch" onChange={props.toggleMode} checked={props.mode === 'dark'} />
                <label className="form-check-label" htmlFor="modeSwitch"> {props.mode === 'dark' ? 'Dark' : 'Light'} Mode </label>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
