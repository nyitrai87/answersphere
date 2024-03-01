import { useState } from "react";
import {
  Container,
  Tabs,
  Tab,
  Button,
  InputGroup,
  FormControl,
  Col, 
  Row, 
  Form
} from "react-bootstrap";
import { BsFacebook, BsTwitter, BsGoogle, BsGithub } from "react-icons/bs";
import "./index.css";

function LogIn() {
  // the activeTab state tracks the active tab of the form (login or registration)
  const [activeTab, setActiveTab] = useState("login");

  //this function handler is called when the tab changes: it updates the activeTab state with the new tab value.
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container className="p-3 my-5 d-flex flex-column">
      {/* the Tabs component from React Bootstrap. 
        We pass to it the current active tab (activeKey) + the tab change handler function (onSelect) + classes for styling. */}
      <Tabs
        activeKey={activeTab}
        onSelect={handleTabChange}
        className="mb-3 d-flex flex-row justify-content-between"
      >
        <Tab eventKey="login" title="Login" />
        <Tab eventKey="register" title="Register" />
      </Tabs>

      <div className="text-center mb-3">
        <p>{activeTab === "login" ? "Sign in with:" : "Sign up with:"}</p>

        <div className="d-flex justify-content-around">
          <Button variant="link" className="m-1 icons">
            <BsFacebook size={24} />
          </Button>
          <Button variant="link" className="m-1 icons">
            <BsTwitter size={24} />
          </Button>
          <Button variant="link" className="m-1 icons">
            <BsGoogle size={24} />
          </Button>
          <Button variant="link" className="m-1 icons">
            <BsGithub size={24} />
          </Button>
        </div>

        <p className="text-center mt-3">or:</p>
      </div>

      {/* component from React Bootstrap for entering an email */}
      <InputGroup className="mb-4">
        <FormControl placeholder="Email address" />
      </InputGroup>

      {/* component from React Bootstrap for entering password */}
      <InputGroup className="mb-4">
        <FormControl placeholder="Password" />
      </InputGroup>

      {/* This is a conditional operator: it displays a specific JSX block only if the current tab is login. */}
      {/* {activeTab === "login" && (
        <div className="d-flex flex-column flex-md-row justify-content-between mx-md-4 mb-4">
          <FormCheck label="Remember me" />
          <a href="!#">Forgot password?</a>
        </div>
      )} */}

      <Button className="custom-logInBtn">
        {activeTab === "login" ? "Sign in" : "Sign up"}
      </Button>

      {/* toggling between the login and registration forms */}
      <p className="text-center mt-2">
        {activeTab === "login" ? "Not a member? " : "Already have an account? "}
        <button
          onClick={() =>
            setActiveTab(activeTab === "login" ? "register" : "login")
          }
          className="custom-logInBtn"
        >
          {activeTab === "login" ? "Register" : "Sign in"}
        </button>
      </p>
    </Container>
  );
}

export default LogIn;
