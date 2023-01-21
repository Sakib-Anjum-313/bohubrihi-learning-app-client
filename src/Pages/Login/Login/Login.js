import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";


const Login = () => {
  const { logInUser, gitHubLogin, googleLogin } = useContext(AuthContext);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || '/';
  
  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    logInUser(email, password)
      .then((result) => {
        const user = result.user;
        setError('');
        form.reset();
        navigate(from, {replace: true});
      // console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      
    });
  };

  const handleGitHubLogin = () => {
    gitHubLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => { setError(error.message); });
  };

  const handleGoogleHubLogin = () => {
    googleLogin()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };


  return (
    <>
      <div className="container w-50 mt-4">
        <Form onSubmit={handleLogIn}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              name="password"
              type="password"
              placeholder="Password"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Login
          </Button>
          <Form.Text className="text-danger ms-2">{error}</Form.Text>
          <Form.Group className="mt-2">
            <Form.Label>
              Don't have an account?{" "}
              <Link to={"/login/register"}>Register</Link>
            </Form.Label>
          </Form.Group>
          <Form.Group className="mt-2">
            <div className="d-grid gap-2">
              <Button
                onClick={handleGoogleHubLogin}
                variant="primary"
                size="md"
              >
                Google Login
              </Button>
              <Button onClick={handleGitHubLogin} variant="secondary" size="md">
                GitHub Login
              </Button>
            </div>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Login;
