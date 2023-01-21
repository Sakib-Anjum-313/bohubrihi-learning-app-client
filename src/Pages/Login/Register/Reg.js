import React, { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";

const Reg = () => {
  const { createUser, updateUserProfile, varifyUserEmail } =
    useContext(AuthContext);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    // console.log(name, photo, email, password);

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setError("");
        handleUpdateProfile(name, photo);
        handleEmailVerification();
        toast.success("Please verify your email address.");
        form.reset();
        navigate("/login");
        // console.log(user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleUpdateProfile = (name, photo) => {
    const profile = {
      displayName: name,
      photoURL: photo,
    };
    updateUserProfile(profile)
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  const handleEmailVerification = () => {
    varifyUserEmail()
      .then(() => {})
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <>
      <div className="container w-50 mt-4">
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter Full Name"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo</Form.Label>
            <Form.Control
              name="photo"
              type="text"
              placeholder="Enter Your Photo"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter email"
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
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
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Register
          </Button>
          <Form.Text className="text-danger ms-3">{error}</Form.Text>
          <Form.Group className="mt-2">
            <Form.Label>
              Already have an account? <Link to={"/login"}>Login</Link>
            </Form.Label>
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default Reg;
