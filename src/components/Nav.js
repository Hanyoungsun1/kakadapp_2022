import React from 'react';
import { Link } from 'react-router-dom';


function Nav() {
  return (
    <nav className="tabbar">
    <Link to="/">
      <i className="FaUserAlt"></i>
      Friends
      </Link>

    <Link to="/Chats">
    <i className="BsFillChatFill"></i>
    Chats
    </Link>

    <Link to="/Find">
    <i className="FiSearch"></i>
    Find
    </Link>

    <Link to="/More">
    <i className="FiMoreHorizontal"></i>
    More
    </Link>
 </nav>
 

  );
}

export default Nav;