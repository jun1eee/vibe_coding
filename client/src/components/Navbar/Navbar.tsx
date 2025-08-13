import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import the new CSS file

const Navbar: React.FC = () => {
  return (
    // Apply the new transparent class and remove old background/theme classes
    <nav className="navbar navbar-expand-lg navbar-dark navbar-transparent">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {/* The color is now handled by Navbar.css */}
          <span>SSAFY</span>
        </Link>
        <div className="collapse navbar-collapse justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/chat">채팅</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/login">로그인</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/register">회원가입</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
