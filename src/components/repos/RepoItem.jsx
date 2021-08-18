import React from 'react';
import PropTypes from 'prop-types';
import './RepoItem.scss';

const RepoItem = ({ repo }) => {

  return <>
    <li className="RepoItem">
      <span
        title={JSON.stringify(repo, null, 2)}
      >i</span>
      <div>
        <span>{repo.name}</span>
      </div>
    </li>
  </>;
};

RepoItem.propTypes = {
  repo: PropTypes.object.isRequired,
};

export default RepoItem;
