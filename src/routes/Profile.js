import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import profileImage from '../data/profileImg.json';
import '../styles/Profile.scss';

function Profile() {
const myProfile = profileImage[0].image;
return (
  <>
       <header className="header profile">
     <div className="statusbar">
        <div className="leftitem">
          <i className="FaPlane"></i>
          <i className="AiOutlineWifi" ></i>
        </div>

        <div className="centeritem">
          <span>15</span> : <span>33</span>
        </div>

        <div className="rightitem">
          <i className="BsMoon"></i>
          <i className="BiBluetooth" ></i>
          <span>100%</span>
          <i className="BsBatteryFull"></i>
        </div> 
       </div> 
       <div className="title-bar">
          <div className="left-item">
            <NavLink to="/"><i className="AiOutlineLeft"></i></NavLink>
          </div>
          <div className="right-item"><i className="FaUserAlt"></i></div>
        </div>
      </header>
      <main className="main profile-wrap">
        <div className="background"></div>
        <section className="profile">
          <div className="profile-img">
            <img src={myProfile} alt="profile images" />
          </div>
          <div className="profile-cont">
            <span className="profile-name">My Name</span>
            <input type="text" className="profile-email" placeholder="UserID@gmail.com" />
            <ul className="profile-menu">
              <li><Link to=""><span className="icon"><i className="BsFillChatFill"></i></span>My Chatroom</Link></li>
              <li><Link to=""><span className="icon"><i className="BsPencilFill"></i></span>Edit Profile</Link></li>
            </ul>
          </div>
        </section>
      </main>


    
  </>
  )
}

export default Profile