import React from 'react';
import PropTypes from 'prop-types';
import './Profile.scss';

const Profile = ({ profile }) => {
  
  return <>
    <div className="Profile">
      <h3><a href={profile.url}>{profile.login}</a></h3>
      <div>
        <span><span>{profile.public_repos}</span> public repos</span>
        <span>
          user since <span>{new Date(profile.created_at).toDateString()}</span>
        </span>
      </div>
      <span>{profile.bio}</span>
    </div>
  </>;
};

Profile.propTypes = {
  profile: PropTypes.object.isRequired
};

export default Profile;
