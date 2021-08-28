import React, { useEffect, useState } from "react";

import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";
import { Link, Redirect } from "react-router-dom";

const Repos = ({ repos_url }) => {
  const [repos, setRepos] = useState([]);

  const fetchRepos = async () => {
    const { data } = await Axios.get(repos_url);
    setRepos(data);
  };

  useEffect(() => {
    fetchRepos();
  }, [repos_url]);

  return (
    <ListGroup>
      {repos.map((repo) => (
        <ListGroupItem key={repo.id}>
          <div className="text-primary">{repo.name}</div>
          <div className="text-secondary">{repo.language}</div>
          <div className="text-info">{repo.description}</div>
          <a href={repo.html_url}>
            <div className="text-info">{repo.html_url}</div>
          </a>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
