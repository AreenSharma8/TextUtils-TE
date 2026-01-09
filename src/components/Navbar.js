import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar(props){
  return (
    <>
      <nav className={`navbar navbar-expand-lg ${props.mode === 'dark' ? 'navbar-dark bg-dark' : 'navbar-light bg-light'}`}>
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
          </ul>
          <div className="d-flex align-items-center">
            <form className="d-flex me-3" role="search" onSubmit={(e) => e.preventDefault()}>
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className={`btn ${props.mode === 'dark' ? 'btn-outline-light' : 'btn-outline-success'}`} type="submit">Search</button>
            </form>

            {/* Dark mode switch */}
            <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'}`}>
              <input className="form-check-input" type="checkbox" role="switch" id="modeSwitch" onChange={props.toggleMode} checked={props.mode === 'dark'} />
              <label className="form-check-label" htmlFor="modeSwitch">{props.mode === 'dark' ? 'Dark' : 'Light'} Mode</label>
            </div>
          </div>
        </div>
      </div>
      </nav>
    </>
  )
}


