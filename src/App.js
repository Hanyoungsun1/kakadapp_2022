import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.scss';
import Nav from './components/Nav';
import Friends from './routes/Friends';
import Chats from './routes/Chats';
import Chatting from './routes/Chatting';
import Find from './routes/Find' ;
import More from './routes/More';
import Profile from './routes/Profile';


function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Navigation />
     <Routes>
       <Route path='/' element={<Friends />} />
       <Route path='/chats' element={<Chats />} />
       <Route path='/chatting' element={<Chatting />} />
       <Route path='/find' element={<Find />} />
        <Route path='/more' element={<More />} />
        <Route path='/profile' element={<Profile />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;