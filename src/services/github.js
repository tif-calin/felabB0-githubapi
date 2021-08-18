/* eslint-disable no-console */
const API = 'https://api.github.com/users';

const fetchUser = async username => {
  return await fetch(`${API}/${username}`)
    .then(resp => resp.json())
    .catch(err => console.error(err))
  ;
};

const fetchUserRepos = async username => {
  return await fetch(`${API}/${username}/repos`)
    .then(resp => resp.json())
    .catch(err => console.error(err))
  ;
};

export { fetchUser, fetchUserRepos };
