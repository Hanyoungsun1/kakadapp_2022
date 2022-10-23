import React from 'react';
import { useLocation } from 'react-router';
import { Link, NavLink , useLocation} from 'react-router-dom';
import '../styles/Chatting.scss';

function Chatting() {
  const location = useLocation();
  const { name, img } = location.state;

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

       <div className="title-bar">
          <h1>{name}</h1>
          <div className="left-item">
            <Link to="/chats"><i className="AiOutlineLeft"></i></Link>
          </div>
          <div className="right-item"><i className="FaCog"></i></div>
        </div>
      </header>
      <main className="main chatting">
        <span className="date-info">Monday, October 25, 2021</span>
        <div className="chat-box my">
          <span className="chat">Hello!</span>
          <span className="chat">Hello! This is a test message. Hello!</span>
          <span className="chat">This is a test message.</span>
          <span className="chat-time"><span>16</span>:<span>30</span></span>
        </div>
        <div className="chat-box other">
          <div className="other-info">
            <Link to="">
              <span className="profile-img"><img src={img} alt="profile img" /></span>
            </Link>
            <span className="profile-name">{name}</span>
          </div>
          <span className="chat">And this is an answer</span>
          <span className="chat">And this is an answer And this is an answer</span>
          <span className="chat">And this is an answer</span>
          <span className="chat-time"><span>17</span>:<span>10</span></span>
        </div>
      </main>
      <footer className="footer chatting">
        <span className="plus-btn"><Link to=""><i className="BsPlusLg"></i></Link></span>
        <form action="/" method="post">
          <fieldset className="text-box">
            <legend className="blind">채팅 입력창</legend>
            <label className="blind">채팅 입력</label>
            <input type="text" id="chatting" className="text-field" />
            <span className="emoticon-btn"><Link to=""><i className="CiFaceSmile"></i></Link></span>
            <span className="voice-btn"><Link to=""><i className="MdKeyboardVoice"></i></Link></span>
          </fieldset>
        </form>
      </footer>
     
      
    </>
  )
}

export default Chatting