import React, { useContext, useState } from "react";
// import {
//   Container,
//   Form,
//   Button,
//   FormGroup,
//   Label,
//   Col,
//   Input,
//   Row,
//   Card,
//   CardBody,
//   CardFooter,
//   CardHeader,
// } from "reactstrap";
import "./Signin.css";

import firebase from "firebase/app";
import { UserContext } from "../context/UserContext";
import { Redirect } from "react-router-dom";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const Signup = () => {
  const context = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
        context.setUser({ email: res.user.email, uid: res.user.uid });
      })
      .catch((error) => {
        console.log(error);
        toast(error.message, {
          type: "error",
        });
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSignIn();
  };

  if (context.user?.uid) {
    return <Redirect to="/" />;
  }
  return (
    <div className="signin">
      <div className="signin-container">
        <h1>Sign-In</h1>
        <form onSubmit={handleSubmit}>
          <h5>Email</h5>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="provide your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="provide your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" className="signin-btn">
            Sign In
          </button>

          <p>
            By continuing, you agree to our Conditions of Use and Privacy
            Notice.
          </p>

          <div className="new">
            <h5>New to Gitfire App?</h5>
          </div>
          <Link to="/signup">
            <button type="submit" className="signup-btn">
              Create your Gitfire Account
            </button>
          </Link>
        </form>
      </div>
    </div>
    // <Container className="text-center">
    //   <Row>
    //     <Col lg={6} className="offset-lg-3 mt-5">
    //       <Card>
    //         <Form onSubmit={handleSubmit}>
    //           <CardHeader className="">SignIn here</CardHeader>
    //           <CardBody>
    //             <FormGroup row>
    //               <Label for="email" sm={3}>
    //                 Email
    //               </Label>
    //               <Col sm={9}>
    //                 <Input
    //                   type="email"
    //                   name="email"
    //                   id="email"
    //                   placeholder="provide your email"
    //                   value={email}
    //                   onChange={(e) => setEmail(e.target.value)}
    //                 />
    //               </Col>
    //             </FormGroup>
    //             <FormGroup row>
    //               <Label for="password" sm={3}>
    //                 Password
    //               </Label>
    //               <Col sm={9}>
    //                 <Input
    //                   type="password"
    //                   name="password"
    //                   id="password"
    //                   placeholder="provide your password here"
    //                   value={password}
    //                   onChange={(e) => setPassword(e.target.value)}
    //                 />
    //               </Col>
    //             </FormGroup>
    //           </CardBody>
    //           <CardFooter>
    //             <Button type="submit" block color="primary">
    //               Sign In
    //             </Button>
    //           </CardFooter>
    //         </Form>
    //       </Card>
    //     </Col>
    //   </Row>
    // </Container>
  );
};

export default Signup;
