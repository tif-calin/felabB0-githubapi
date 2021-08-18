import React from 'react';
import useGitHub from '../../state/state.js';
import Profile from '../profile/Profile';
import RepoList from '../repos/RepoList';
import './App.scss';

export default function App() {
  const { loading, profile, repos, setUsername } = useGitHub();

  return <>
    <header>
      <h1>hubgit</h1>
      <form
        onSubmit={e => {
          e.preventDefault();
          setUsername(e.target.querySelector('input[name="username"]').value);
        }}
      >
        <input name="username" type="text"/>
        <button>go</button>
      </form>
    </header>

    <hr/>

    <main>
      {loading ? <span>loading...</span> : <>
        <Profile profile={profile}/>
        <hr/>
        <RepoList repos={repos}/>
      </>}
    </main>
    
    <hr/>

    <footer><a 
      href="https://github.com/tif-calin/felabB0-githubapi"
    >&#127279; steal this content</a></footer>
  </>;
}
