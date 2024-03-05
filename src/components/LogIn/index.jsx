import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Tabs,
  Tab,
  Button,
  InputGroup,
  FormControl,
  Form,
} from "react-bootstrap";
import {
  doCreateUserWithEmailAndPassword,
  doSignInWithEmailAndPassword,
} from "../../firebase/auth";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function LogIn() {
  const navigate = useNavigate();

  const [activeTab, setActiveTab] = useState("login");
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSigningIn, setIsSigningIn] = useState(false);
  const [userID, setUserID] = useState("");

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (isLoggedIn) {
      navigate("/");
      toast.success("Logged in successfully!", {
        position: "top-center",
        theme: "colored",
      });
    }
  }, [isLoggedIn, navigate]);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!isSigningIn) {
      setIsSigningIn(true);
      try {
        let cred;
        if (activeTab !== "register") {
          cred = await doSignInWithEmailAndPassword(email, password);
          console.log(cred)
          // setUserID(cred.user.uid);
        } else if (activeTab === "register") {
          cred = await doCreateUserWithEmailAndPassword(email, password, username);
          // setUserID(cred.user.uid);
          setIsLoggedIn(true);
          toast.success("Registration successful!", {
            position: "top-center",
            theme: "colored",
          });
          return;
        }
        setEmail("");
        setPassword("");
        setIsLoggedIn(true);
      } catch (error) {
        console.error("Error:", error);
        if (
          activeTab === "register" &&
          error.code === "auth/email-already-in-use"
        ) {
          toast.error("This email address is already in use!", {
            position: "top-center",
            theme: "colored",
          });
        } else {
          toast.error("Username or password incorrect. Please try again!", {
            position: "top-center",
            theme: "colored",
          });
        }
        setEmail("");
        setPassword("");
      } finally {
        setIsSigningIn(false);
      }
    }
  };

  return (
    <div>
      <Form onSubmit={onSubmit} className="p-3 my-5 d-flex flex-column">
        <Tabs
          activeKey={activeTab}
          onSelect={handleTabChange}
          className="mb-3 d-flex flex-row justify-content-between"
        >
          <Tab eventKey="login" title="Login" />
          <Tab eventKey="register" title="Sign up" />
        </Tabs>

        {activeTab === "register" && (
          <InputGroup className="mb-4">
            <FormControl
              type="username"
              placeholder="Username"
              value={username}
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
          </InputGroup>
        )}

        <InputGroup className="mb-4">
          <FormControl
            type="email"
            placeholder="Email address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </InputGroup>

        <InputGroup className="mb-4">
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </InputGroup>

        <Button
          className="custom-logInBtn custom-btn"
          type="submit"
          disabled={isSigningIn}
        >
          {activeTab === "login" ? "Login" : "Sign up"}
        </Button>
      </Form>

      <p className="text-center mt-2">
        {activeTab === "login" ? "Not a member? " : "Already have an account? "}
        <button
          onClick={() =>
            setActiveTab(activeTab === "login" ? "register" : "login")
          }
          className="custom-btn"
        >
          {activeTab === "login" ? "Sign up" : "Login"}
        </button>
      </p>
    </div>
  );
}

export default LogIn;
