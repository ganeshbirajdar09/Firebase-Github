import React, { useEffect } from "react";
import { Link, useHistory } from "react-router-dom";
import "./page.css";

const PageNotFound = () => {
  const history = useHistory();
  useEffect(() => {
    setTimeout(() => {
      history.push("/signin");
    }, 1000);
  }, []);
  return (
    <div className="not-found">
      <h1>Oooopss...</h1>
      <h2>That page cannot be found.</h2>
      <p>
        Go back to the <Link href="/signin">Signin</Link>
      </p>
    </div>
  );
};

export default PageNotFound;
