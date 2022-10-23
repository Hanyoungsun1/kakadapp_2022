import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import MemberList from '../components/MemberList';
import profileImage from '../data/profileImg.json';
import '../styles/Friends.scss';

function Friends() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const friendsImg = profileImage;
  const myProfile = friendsImg[0];

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setError(null);
        setProfile(null);
        setLoading(true);
        const response = await axios.get(
          'https://jsonplaceholder.typicode.com/users'
        );
        setProfile(response.data);
      } catch (e) {
        setError(e);
      }
      setLoading(false);
    };

    fetchUsers();
  }, []);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>An error has occurred!</div>;
  if (!profile) return null;
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
        <h1>Friends <span>1</span></h1>
        <div className="leftitem">
          <NavLink to="/">Manage</NavLink>
        </div>
        <div className="rightitem">
          <i className="FaCog"></i>
        </div>
    </div>
    </header>

    <main className='main'>
    
    <form className="searchbox">
      <fieldset className="searchinner">
      <legend className="blind">검색창</legend>
        <i className="BiSearch"></i>
        <input type="search" name="search" id="search" placeholder="Find friends, Chats, Plus Friends"/>
      </fieldset>
    </form>    

    <section className="main-section">
          <header><h2>My Profile</h2></header>
          <ul>
            <li>
              <Link to="/profile">
                <span className="profile-img">
                  <img src={myProfile.image} alt="profile images" />
                </span>
                <span className="profile-name">My Name</span>
                <span className="profile-messages">Hello World</span>
              </Link>
            </li>
          </ul>
        </section>
        <section className="main-section">
          <header><h2>Friends</h2></header>
          <ul>
            {profile.map((profileInfo, idx) => {
              if (profileInfo.id > 1) {
                return (
                  <MemberList
                    key = {profileInfo.id}
                    id = {profileInfo.id}
                    name = {profileInfo.name}
                    email = {profileInfo.email}
                    img = {friendsImg[idx].image}
                  />
                )
              }
              return false;
            })}
          </ul>
        </section>
      </main>
      <Nav />

    </>
  )
}

export default Friends