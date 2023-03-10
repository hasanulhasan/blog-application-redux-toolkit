import React from 'react';
import { Link } from 'react-router-dom';
import logImg from '../images/LWSBlog.svg'

const Navbar = () => {
  return (
    <nav className="py-4 border-b">
      <div className="navbar-container">
        {/* <!-- logo --> */}
        <div className="logo">
          <Link to='/'>
            <img src={logImg} alt="search" />
          </Link>
        </div>
        {/* <!-- auth buttons , This will nonfunctional, just for nice looking --> */}
        <div className="auth-buttons">
          <button className="btn btn-primary">sign in</button>
          <button className="btn btn-outline">sign up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;