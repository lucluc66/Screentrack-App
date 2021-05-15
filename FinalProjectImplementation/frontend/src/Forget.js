import React from "react";
import "./Login.css";
import { Col, Button, DropdownButton, Dropdown, Form } from "react-bootstrap";
// import Track from "./Track";
import Login from "./Login";
import Tips from "./Tips";
import Contact from "./Contact";
import About from "./About";

class Forget extends React.Component {
  constructor() {
    super();
    this.state = {
      signin: false,
      about: false,
      track: false,
      tips: false,
      contact: false,
      logined: false,
      username: "",
      email: "",
      password: "",
    };
  }

  handleTips() {
    this.setState({
      tips: true,
    });
  }

  handleContact() {
    this.setState({
      contact: true,
    });
  }

  // handleTrack() {
  //   this.setState({
  //     track: true,
  //   });
  // }

  handleAbout() {
    this.setState({
      about: true,
    });
  }

  handleHome() {
    this.setState({
      signin: true,
    });
  }

  validateEmail(e) {
    console.log("Validate email!");
    const re = /\w+@[\w+.\w+]+/g;
    return re.test(e);
  }

  updateData() {
    let data = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
    };
    let options = {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:3001/credentials/", options);
    alert("Submitted");
  }

  handleSubmit() {
    if (
      this.state.username === "" ||
      this.state.email === "" ||
      this.state.password === ""
    ) {
      alert("Please complete the form.");
    } else if (this.validateEmail(this.state.email) === false) {
      alert("Please enter a valid email.");
    } else {
      this.updateData();
    }
  }

  render() {
    // if (this.state.track) {
    //   return (
    //     <div>
    //       <Track />
    //     </div>
    //   );
    // }
    if (this.state.about) {
      return (
        <div>
          <About logined={this.state.logined}/>
        </div>
      );
    }
    if (this.state.tips) {
      return (
        <div>
          <Tips logined={this.state.logined}/>
        </div>
      );
    }
    if (this.state.contact) {
      return (
        <div>
          <Contact logined={this.state.logined}/>
        </div>
      );
    }
    if (this.state.signin) {
      return (
        <div>
          <Login />
        </div>
      );
    }
    return (
      <div class="body">
        {/* Buttons Icon https://www.w3schools.com/howto/howto_css_icon_buttons.asp */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        ></link>
        <div class="row">
          <Col>
            <Button
              id="top-bar"
              variant="Home"
              onClick={() => this.handleHome()}
            >
              <i class="fa fa-home">Home</i>
            </Button>
          </Col>
          <Col>
            <DropdownButton
              id="dropd-btn"
              title={<i class="fa fa-bars">Menu</i>}
            >
              <div class="droptd-content">
                <Dropdown.Item onClick={() => this.handleAbout()}>
                  About us
                </Dropdown.Item>
              </div>
              <div class="droptd-content">
                <Dropdown.Item>Account</Dropdown.Item>
              </div>
              <div class="droptd-content">
                <Dropdown.Item>Track</Dropdown.Item>
              </div>
              <div class="droptd-content">
                <Dropdown.Item onClick={() => this.handleTips()}>
                  Tips
                </Dropdown.Item>
              </div>
            </DropdownButton>
          </Col>
          <Col>
            <Button
              id="top-bar"
              variant="Contact us"
              onClick={() => this.handleContact()}
            >
              <i class="fa fa-address-book">Contact us</i>
            </Button>
          </Col>
        </div>
        <div>
          <main class="signin-form">
            <Form id="login-form">
              <h1 class="mb-3">Reset Password:</h1>
              <Form.Group id="forminput" controlId="formBasicUsername" required>
                <Form.Control
                  name="username"
                  type="text"
                  placeholder="Username"
                  onChange={(e) => this.setState({ username: e.target.value })}
                  value={this.state.username}
                />
              </Form.Group>
              <Form.Group id="forminput" controlId="formBasicEmail" required>
                <Form.Control
                  name="email"
                  type="email"
                  placeholder="Email address"
                  onChange={(e) => this.setState({ email: e.target.value })}
                  value={this.state.email}
                />
              </Form.Group>
              <Form.Group id="forminput" controlId="formBasicPassword" required>
                <Form.Control
                  name="password"
                  type="password"
                  placeholder="New Password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  value={this.state.password}
                />
              </Form.Group>
              <Form.Group controlId="formBasicCheckbox">
                <Form.Control
                  name="cpassword"
                  type="password"
                  placeholder="Comfirm Password"
                  onChange={(e) => this.setState({ password: e.target.value })}
                  value={this.state.password}
                />
              </Form.Group>
              <Button
                id="login"
                type="submit"
                onClick={() => this.handleSubmit()}
              >
                Submit
              </Button>
              <p class="mt-5 mb-3">© 2021</p>
            </Form>
          </main>
        </div>
      </div>
    );
  }
}

export default Forget;
