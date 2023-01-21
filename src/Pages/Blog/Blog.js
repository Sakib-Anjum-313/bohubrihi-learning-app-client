import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Header from "../Common/Header/Header";

const Blog = () => {
  return (
    <div>
      <Header></Header>
      <Accordion className="container mt-4" style={{ maxWidth: "700px" }}>
        <Accordion.Item eventKey="0">
          <Accordion.Header>what is cors?</Accordion.Header>
          <Accordion.Body>
            Cross-Origin Resource Sharing (CORS) is an HTTP-header based
            mechanism that allows a server to indicate any origins (domain,
            scheme, or port) other than its own from which a browser should
            permit loading resources. CORS also relies on a mechanism by which
            browsers make a "preflight" request to the server hosting the
            cross-origin resource, in order to check that the server will permit
            the actual request. In that preflight, the browser sends headers
            that indicate the HTTP method and headers that will be used in the
            actual request.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            Why are you using firebase? What other options do you have to
            implement authentication?
          </Accordion.Header>
          <Accordion.Body>
            I'm using Firebase because it easy to use and secure.
            <br></br>
            What are those 4 commonly authentication methods *? Common biometric
            authentication methods include fingerprint identification, voice
            recognition, retinal and iris scans, and face scanning and
            recognition.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>How does the private route work?</Accordion.Header>
          <Accordion.Body>
            The react private route component renders child components (
            children ) if the user is logged in. If not logged in the user is
            redirected to the /login page with the return url passed in the
            location state property.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>What is Node? How does Node work?</Accordion.Header>
          <Accordion.Body>
            Node. js is an open-source, cross-platform JavaScript runtime
            environment and library for running web applications outside the
            client's browser. Ryan Dahl developed it in 2009, and its latest
            iteration, version 15.14, was released in April 2021. Developers use
            Node.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </div>
  );
};

export default Blog;
