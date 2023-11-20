import React from 'react';
import './App.css';
import Header from './components/Header';
import UserInfo from './components/UserInfo';
import Posts from './components/Posts';
import CoverPhoto from './components/CoverPhoto';
import Bio from './components/Bio';

const color = {
  color: 'skyblue', // Set the color to sky blue
};

const App = () => (
  <div>
    <Header />
    <CoverPhoto />
    <UserInfo />  
    <Bio/>
    <div className="posts-container">
      <h2 className='p' style={color}>134 Posts
      </h2>
      <Posts />
    </div>
  </div>
);

export default App;
