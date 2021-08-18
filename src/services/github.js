/* eslint-disable no-console */
const API = 'https://api.github.com/users';

const fetchUser = async username => {
  return await fetch(`${API}/${username}`)
    .then(resp => resp.json())
    .catch(err => console.error(err))
  ;
};

const fetchUserRepos = async (username, page = 1) => {
  return await fetch(`${API}/${username}/repos?page=${page}&per_page=100`)
    .then(resp => resp.json())
    .catch(err => console.error(err))
  ;
};

export { fetchUser, fetchUserRepos };
