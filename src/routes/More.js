import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../components/Nav';
import profileImage from '../data/profileImg.json';
import '../styles/More.scss';

function More() {
  const myImages = profileImage[0];
  return (
    <>
     <header>
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

    <div className="titlebar">
        <h1>More</h1>
        <div className="rightitem">
          <i className="FaCog"></i>
        </div>
    </div>
    </header>
    
    <main className="main more">
        <section className="user-info">
          <h2 className="blind">사용자 정보</h2>
          <span className="profile-img">
            <img src={myImages.image} alt="My name" />
          </span>
          <span className="profile-info">
            <span className="profile-name">My Name</span>
            <span className="profile-email">Userid@gmail.com</span>
          </span>
          <span className="chat-img"><Link to=""><i className="BsFillChatFill"></i></Link></span>
        </section>
        <section className="user-menu">
          <h2 className="blind">사용자 메뉴</h2>
          <ul>
            <li><Link to=""><i className="CiFaceSmile"></i>Emoticons</Link></li>
            <li><Link to=""><i className="FaPaintBrush"></i>Themes</Link></li>
            <li><Link to=""><i className="FaRegHandPeace"></i>Plus Friends</Link></li>
            <li><Link to=""><i className="FaUserAlt"></i>Account</Link></li>
          </ul>
        </section>
        <section className="plus-friends">
          <header>
            <h2>Plus Friends</h2>
            <span><i className="AiFillInfoCircle"></i> Learn More</span>
          </header>
          <ul className="plus-list">
            <li><Link to=""><i className="FaUtensils"></i>Order</Link></li>
            <li><Link to=""><i className="BsHouseFill"></i>Store</Link></li>
            <li><Link to=""><i className="FaTv"></i>TV Channel/Radio</Link></li>
            <li><Link to=""><i className="BsPencilFill"></i>Creation</Link></li>
            <li><Link to=""><i className="FaGraduationCap"></i>Education</Link></li>
            <li><Link to=""><i className="FaUniversity"></i>Politics/Society</Link></li>
            <li><Link to=""><i className="BiWon"></i>Finance</Link></li>
            <li><Link to=""><i className="BsFillCameraVideoFill"></i>Movies/Music</Link></li>
          </ul>
        </section>
        <section className="more-app">
          <h2 className="blind">앱 더보기</h2>
          <ul>
            <li><Link to=""><span className="app-icon"></span>Kakao Story</Link></li>
            <li><Link to=""><span className="app-icon"></span>Path</Link></li>
            <li><Link to=""><span className="app-icon"></span>Kakao Friends</Link></li>
          </ul>
        </section>
      </main>
      <Nav />

    </>
  )
}

export default More