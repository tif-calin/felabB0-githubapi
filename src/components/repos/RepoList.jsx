import React from 'react';
import PropTypes from 'prop-types';
import RepoItem from './RepoItem';
import './RepoList.scss';

const RepoList = ({ repos }) => {
  
  return <>
    <ul className="RepoList">
      <div>
        <span>repo</span>
        <span>size</span>
      </div>
      {repos.map(repo => <RepoItem key={repo.id} repo={repo} />)}
    </ul>
  </>;
};

RepoList.propTypes = {
  repos: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default RepoList;
