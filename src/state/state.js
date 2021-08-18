import { useState, useEffect } from 'react';
import { fetchUser, fetchUserRepos } from '../services/github.js';

const useGitHub = () => {
  const [loading, setLoading] = useState(false);
  const [username, setUsername] = useState('');
  const [profile, setProfile] = useState({});
  const [repos, setRepos] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetchUser(username)
      .then(profile => setProfile(profile))
      .then(() => fetchUserRepos(username))
      .then(repos => setRepos(repos))
      .finally(() => setLoading(false))
    ;
  }, [username]);

  return { loading, profile, repos, setUsername };
};

export default useGitHub;
