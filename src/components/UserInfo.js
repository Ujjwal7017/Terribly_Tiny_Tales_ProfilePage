// UserInfo.js

import React from 'react';
import ProfileHeader from './ProfileHeader';
import ProfilePicture from './ProfilePicture';

const UserInfo = () => (
  <div className="user-info">
    <ProfilePicture />
    <ProfileHeader
      name="Ujjwal Shukla"
      bio="Frontend Developer | React Enthusiast"
      followers={6482}
      following={500}
      instagramLink="https://www.linkedin.com/in/ujjwal77/"
    />
  </div>
);

export default UserInfo;
