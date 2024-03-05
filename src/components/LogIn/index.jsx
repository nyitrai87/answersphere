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
import { doCreateUserWithEmailAndPassword, doSignInWithEmailAndPassword, doSignInWithGoogle } from '../../firebase/auth'
import { useAuth } from '../../contexts/authContext'

function LogIn() {
  // the activeTab state tracks the active tab of the form (login or registration)
  const [activeTab, setActiveTab] = useState("login");

  //this function handler is called when the tab changes: it updates the activeTab state with the new tab value.
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [signInMessage, setSignInMessage] = useState('');
  const [userID, setUserID] = useState('');


  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        let cred; // Define a variable to hold user credentials
        if (activeTab !== "register") {
          // If the user is on the login tab, you can implement login functionality here
          cred = await doSignInWithEmailAndPassword(email, password);
          setUserID(cred.user.uid);
          setSignInMessage(`${email} has signed in successfully`);
        } else if (activeTab === "register") {
          // If the user is on the registration tab, attempt to create a new account
          cred = await doCreateUserWithEmailAndPassword(email, password);
          setUserID(cred.user.uid);
          setSignInMessage(`${email} has signed up`);
        }
        // Clear form fields on successful submission
        setEmail('');
        setPassword('');
        setErrorMessage('');
      } catch (error) {
        console.error("Error:", error);
        setErrorMessage(error.message);
      } finally {
        setIsSigningIn(false);
      }
    }
  };



  const onGoogleSignIn = (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      doSignInWithGoogle().catch(err => {
        setIsSigningIn(false);
        setSignInMessage(`You have signed in with google`)
      });
    }
  }

  return (
    <div>
      <Form onSubmit={onSubmit} className="p-3 my-5 d-flex flex-column">
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
            <Button variant="link" className="m-1 icons" onClick={onGoogleSignIn}>
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
          <FormControl
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => { setEmail(e.target.value) }} />
        </InputGroup>

        {/* component from React Bootstrap for entering password */}
        <InputGroup className="mb-4">
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => { setPassword(e.target.value) }} />
        </InputGroup>

        {/* This is a conditional operator: it displays a specific JSX block only if the current tab is login. */}
        {/* {activeTab === "login" && (
        <div className="d-flex flex-column flex-md-row justify-content-between mx-md-4 mb-4">
          <FormCheck label="Remember me" />
          <a href="!#">Forgot password?</a>
        </div>
      )} */}

        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        {<p>{signInMessage}</p>}
        <Button className="custom-logInBtn"
          type="submit"
          disabled={isSigningIn}>
          {activeTab === "login" ? "Sign in" : "Sign up"}
        </Button>
      </Form>
      {/* toggling between the login and registration forms */}
      <p className="text-center mt-2">
        {activeTab === "login" ? "Not a member? " : "Already have an account? "}
        <button
          onClick={() =>
            setActiveTab(activeTab === "login" ? "register" : "login")}
          className="custom-logInBtn">
          {activeTab === "login" ? "Register" : "Sign in"}
        </button>
      </p>
    </div>
  );
}

export default LogIn;
