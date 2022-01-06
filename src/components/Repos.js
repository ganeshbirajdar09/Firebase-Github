import React, { useEffect, useState } from "react";
import "./Repos.css";

import Axios from "axios";
import { ListGroup, ListGroupItem } from "reactstrap";

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
          <div className="">{repo.name}</div>
          <div className="text-white">{repo.language}</div>
          <div className="">{repo.description}</div>
          <a href={repo.html_url} rel="noreferrer" target="_blank">
            <div
              style={{
                overflow: "auto",
                overflowWrap: "break-word",
                textDecoration: "none",
                color: "#4078c0",
              }}
              className="text-info"
            >
              {repo.html_url}
            </div>
          </a>
        </ListGroupItem>
      ))}
    </ListGroup>
  );
};

export default Repos;
