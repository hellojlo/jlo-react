import React from 'react';
import { QueryNavLink } from "../../functions.js"

class Navbar extends React.Component {
  
  toggleMenu(e) {
    var el = e.currentTarget;
    const target = el.dataset.target;
    const $target = document.getElementById(target);
    el.classList.toggle('is-active');
    $target.classList.toggle('is-active');
  }

  render() {
    return (
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="logo.png" />
          </a>

          <a onClick={(e) => this.toggleMenu(e)} role="button" className="navbar-burger is-pulled-right" aria-label="menu" aria-expanded="false" data-target="navbar">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <div id="navbar" className="navbar-menu">
          <div className="navbar-start">
            <QueryNavLink to='/' className="navbar-item" style={({ isActive }) => ({ color: isActive ? "red" : "" })} >
              Home
            </QueryNavLink>

            <div className="navbar-item has-dropdown is-hoverable">
              <QueryNavLink to='#' className="navbar-link" >
                Projects
              </QueryNavLink>

              <div className="navbar-dropdown">
                <a className="navbar-item">
                  About
                </a>
                <a className="navbar-item">
                  Jobs
                </a>
                <a className="navbar-item">
                  Contact
                </a>
                <hr className="navbar-divider" />
                <QueryNavLink to='/projects' className="navbar-link" style={({ isActive }) => ({ color: isActive ? "red" : "" })} >
                  All
                </QueryNavLink>
              </div>
            </div>
            <QueryNavLink to='/contact' className="navbar-item" style={({ isActive }) => ({ color: isActive ? "red" : "" })} >
              Contact
            </QueryNavLink>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
