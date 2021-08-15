import React, { useState } from "react";
import { UserContext } from "./context/UserContext";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//firebase
import firebase from "firebase/app";
import "firebase/auth";

//components
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import PageNotFound from "./pages/PageNotFound";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

import firebaseConfig from "./Config/firebaseConfig";
//init firebase
firebase.initializeApp(firebaseConfig);

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signin" component={Signin} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="*" component={PageNotFound} />
        </Switch>

        <Footer />
      </UserContext.Provider>
    </Router>
  );
};

export default App;
