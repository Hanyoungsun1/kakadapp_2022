import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

function Nav() {
  return (
    <nav className="tab-bar">
      <ul>
        <li>
          <Link to="/" className="tab-list">
            <i className="fas fa-user"></i>Friends
          </Link>
        </li>
        <li>
          <Link to="/chats" className="tab-list">
            <i className="fas fa-comment"></i>Chats
          </Link>
        </li>
        <li>
          <Link to="/find" className="tab-list">
            <i className="fas fa-search"></i>Find
          </Link>
        </li>
        <li>
          <Link to="/more" className="tab-list">
            <i className="fas fa-ellipsis-h"></i>More
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;