import React from "react";
import { useHistory } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
//need to write backend functionality

export default function Login() {
  const history = useHistory();
  //setup user context

  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [username, setUsername] = React.useState("default");
  const [isMember, setIsMember] = React.useState(true);

  let isEmpty = !email || !password || !username;

  const toggleMember = () => {
    setIsMember((prevMember) => {
      let isMember = !prevMember;
      isMember ? setUsername("default") : setUsername("");
      return isMember;
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let response;
    //more functionality
  };

  return (
    <div className="container">
      <h1 className="d-flex justify-content-center mt-5">
        {isMember ? "Sign in" : "Register"}
      </h1>
      <div className="d-flex justify-content-center mt-3">
        <Form style={{ width: "400px" }}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              className="inputStyle mainLoginInput"
              type="email"
              placeholder="&#xf0e0; email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control
              className="inputStyle mainLoginInput"
              type="password"
              placeholder="&#xf023; password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          {!isMember && (
            <Form.Group controlId="formBasicUsername">
              <Form.Control
                className="inputStyle mainLoginInput"
                type="text"
                placeholder="&#xf007; username"
                id="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </Form.Group>
          )}
          {isEmpty && (
            <p style={{ color: "#e00d0d" }}>Please fill out the fields</p>
          )}
          {!isEmpty && (
            <Button
              type="submit"
              className=" btn btn-dark submitButton mt-3 mb-2"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          )}
          <p>
            {isMember ? "Don't have an account? " : "Already a member?"}
            <div onClick={toggleMember} className="btn clickHere">
              Click Here
            </div>
          </p>
        </Form>
      </div>
    </div>
  );
}
