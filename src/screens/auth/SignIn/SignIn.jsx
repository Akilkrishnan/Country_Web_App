import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Form from "react-bootstrap/Form";
import "./SignIn.css";
// import { navigator } from "../../../feature/Navigation";
import { useNavigate } from "react-router";
function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return regex.test(password);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters, contain 1 capital letter, 1 number, and 1 symbol."
      );
    } else {
      setError("");
      // Simulate successful login (or add API logic here)
      navigate("/");
    }
  };

    const handleChange = (e) => {
    
    e.preventDefault();
    {if (!validatePassword(password)) {
      setError(
        "Password must be at least 8 characters, contain 1 capital letter, 1 number, and 1 symbol."
      );
    } else {
      setError("");
    }}
  };
  const Images = [
    "src/assets/Auth/google.svg",
    "src/assets/Auth/fb.svg",
    "src/assets/Auth/linkdin.svg",
    "src/assets/Auth/tweet.svg",
  ];
  return (
    <Container className="signin-container">
      <Row className="signin-row">
        <Col>
          <Form onSubmit={handleSubmit} className="signin-form">
            <h1>Sign In</h1>
            <p>
              New user? <span>Create an account</span>
            </p>
            <input
              name="email"
              type="text"
              placeholder="Username or email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <br />

            <input
              type="password"
              name="password"
              value={password}
              placeholder="Password"
              onChange={(e) =>{ setPassword(e.target.value); handleChange(e);}}
              required
            />
            <br />

            <div className="checkbox">
              {" "}
              <input
                type="checkbox"
                name="password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <p>Keep me signed in</p>
            </div>

            {error && (
              <p style={{ color: "red", fontSize: "11px", lineHeight: 1.5 }}>
                {error}
              </p>
            )}
            <button type="submit" className="btn-login">
              Sign In
            </button>
            <Row>
              <Col>
                <hr />
              </Col>
              <Col>
                <p id="or">Or Sign In With</p>
              </Col>
              <Col>
                <hr />
              </Col>
            </Row>
            <div className="signin-icons">
              {Images.map((item) => (
                <div id="signin-icon">
                  <img src={item} height={20} />
                </div>
              ))}
            </div>
          </Form>
        </Col>

        <Col>
          <Image
            src="src/assets/Auth/Illustration.png"
            height={"80%"}
            id="signin-image"
          />
        </Col>
      </Row>
    </Container>
  );
}

export default SignInScreen;
