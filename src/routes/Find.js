import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Nav from '../components/Nav';
import '../styles/Find.scss';

function Find() {
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
        <h1>Chats <span>1</span></h1>
        <div className="leftitem">
          <NavLink to="/">Edit</NavLink>
        </div>
        <div className="right-item">
            <i className="FaCog"></i>
        </div>
    </div>
    </header>
    <main className="main">
        <ul className="find-method">
          <li>
            <Link to=""><i className="FaAddressBook"></i>Find</Link>
          </li>
          <li>
            <Link to=""><i className="AiOutlineQrcode"></i>QR Code</Link>
          </li>
          <li>
            <Link to=""><i className="FaMobileAlt"></i>Shake</Link>
          </li>
          <li>
            <Link to=""><i className="AiOutlineMail"></i>Invite via SNS</Link>
          </li>
        </ul>
        <section className="recommend-section">
          <header><h2>Recommend Friends</h2></header>
          <ul>
            <li>You Have no recommended friends.</li>
          </ul>
        </section>
      </main>
      <Nav />
   
    </>
  )
}

export default Find;