import React from "react";
import { Container } from "reactstrap";

const Footer = () => {
  return (
    <Container
      fluid
      tag="footer"
      className="position-fixed  text-center text-white text-uppercase fixed-bottom p-3"
      style={{
        background: "#333",
        fontWeight: "500",
        left: "0px",
        bottom: "0px",
        zIndex: "1",
        width: "100%",
      }}
    >
      Ganesh github app with firebase
    </Container>
  );
};

export default Footer;
