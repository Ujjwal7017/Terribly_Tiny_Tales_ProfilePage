// ProfileHeader.js
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faHeart, faThumbsUp, faEye } from '@fortawesome/free-solid-svg-icons';
import '../App.css';

const ProfileHeader = () => (
  <div className="myinfodiv">
      <div className="myname">
        <span className='myname' >Ujjwal Shukla</span>
        <span className="mylogo1">
      <img src="diamond.png" className='diamond' alt="Logo" />

        </span>
        <span className="mylogo2">
      <img src="tick.png" className='tick' alt="Logo" />

        </span>
      </div>
      <div className="mybox">
        <button className='btnval' >6482</button>
        <button className='btnval' >245</button>
      </div>
      <div className="mydowntxt">
        <div className="followers">Followers</div>
        <div className="followings">Following</div>
      </div>
      
  </div>
);

export default ProfileHeader;
