import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome to Phone Shop</h1>
      <p>Choose your role to continue</p>

      <div className="row mt-5">
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h3>For Customers</h3>
              <Link to="/customer" className="btn btn-primary btn-lg">Shop Now</Link>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div className="card text-center">
            <div className="card-body">
              <h3>For Admin</h3>
              <Link to="/admin" className="btn btn-danger btn-lg">Manage Store</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;