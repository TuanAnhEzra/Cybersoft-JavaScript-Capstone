import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Phone Shop</h1>
      <p>Choose your role to continue</p>

      <div className="button-group">
        <Link to="/customer" className="btn btn-user">
          User / Customer Page
        </Link>

        <Link to="/admin" className="btn btn-admin">
          Admin Panel
        </Link>
      </div>
    </div>
  );
};

export default Home;