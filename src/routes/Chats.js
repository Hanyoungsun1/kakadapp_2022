import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import axios from 'axios';
import Nav from '../components/Nav';
import ChatList from '../components/ChatList';
import profileImage from '../data/profileImg.json';
import '../styles/Chats.scss';
import { BsFillChatFill} from "react-icons/md";


function Chats() {
  const [profile, setProfile] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const friendsImg = profileImage;

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
        <h1>Chats</h1>
        <div className="leftitem">
          <NavLink to="/">Edit</NavLink>
        </div>
    </div>
    </header>
    <main>
    <form className="searchbox">
      <fieldset className="searchinner">
      <legend className="blind">검색창</legend>
        <i className="BiSearch"></i>
        <input type="search" name="search" id="search" placeholder="Find friends, Chats, Plus Friends"/>
      </fieldset>
    </form> 
    <section className="main-section">
          <header className="blind"><h2>Friends</h2></header>
          <ul>
            {profile.map((chat, idx) => (
              <ChatList
                key = {chat.id}
                id = {chat.id}
                name = {chat.name}
                website = {chat.website}
                img = {friendsImg[idx].image}
              />
            ))}
          </ul>
        </section>
        <div className="floating-btn">
          <Link to=""><i className="BsFillChatFill"></i></Link>
        </div>
    </main>
    </>
  )
}

export default Chats;