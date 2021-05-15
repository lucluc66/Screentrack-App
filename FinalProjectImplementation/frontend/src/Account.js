import React from "react";
import "./Login.css";
import {
  Container,
  Row,
  Col,
  Button,
  DropdownButton,
  Dropdown,
} from "react-bootstrap";
// import demo from "./68947288-242bf100-07c6-11ea-8b08-184be2dd306a.png";
import Login from "./Login";
import About from "./About";
import Tips from "./Tips";
import Contact from "./Contact";
import Track from "./Track";

class Account extends React.Component {
  constructor() {
    super();
    this.state = {
      signin: false,
      about: false,
      track: false,
      tips: false,
      contact: false,
      account: true,
      logined: true,
      delUsername: "",
      delEmail: "",
      delPassword: "",
      errorMessage: "Invalid email.",
    };
  }

  handleHome() {
    this.setState({
      signin: true,
    });
  }

  handleContact() {
    this.setState({
      contact: true,
    });
  }

  handleAbout() {
    this.setState({
      about: true,
    });
  }

  handleTips() {
    this.setState({
      tips: true,
    });
  }

  handleTrack() {
    this.setState({
      track: true,
    });
  }

  handleLogout() {
    this.setState({
      logined: false,
    });
    this.setState({
      signin: true,
    });
  }

  delData() {
    let data = {
      username: this.state.delUsername,
      email: this.state.delEmail,
      password: this.state.delPassword,
    };
    this.setState({
      logined: false,
    });
    let options = {
      method: "delete",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    };
    fetch("http://localhost:3001/credentials/", options);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    if (this.state.signin) {
      return (
        <div>
          <Login />
        </div>
      );
    }
    if (this.state.about) {
      return (
        <div>
          <About logined={this.state.logined} username={this.props.username} email={this.props.email}/>
        </div>
      );
    }
    if (this.state.contact) {
      return (
        <div>
          <Contact logined={this.state.logined} username={this.props.username} email={this.props.email}/>
        </div>
      );
    }
    if (this.state.tips) {
      return (
        <div>
          <Tips logined={this.state.logined} username={this.props.username} email={this.props.email}/>
        </div>
      );
    }
    if (this.state.track) {
      return (
        <div>
          <Track logined={this.state.logined} username={this.props.username} email={this.props.email}/>
        </div>
      );
    }
    // console.log(this.state.logined);
    // console.log(this.state.signin);
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
                <Dropdown.Item onClick={() => this.handleTrack()}>
                  Track
                </Dropdown.Item>
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
        <main class="form-signin">
          <h1>Account:</h1>
          <p>Username: {this.props.username}</p>
          <p>Email: {this.props.email}</p>
          <Button
            id="logout"
            onClick={() => {
              this.handleLogout();
            }}
          >
            Logout
          </Button>
          <h1>Delete Account</h1>
          <form
            onSubmit={() => {
              this.delData();
            }}
          >
            Enter Username:
            <input
              type="text"
              name="delUsername"
              value={this.state.delUsername}
              onChange={(e) => {
                this.handleChange(e);
              }}
            ></input>
            Enter Email:
            <input
              type="text"
              name="delEmail"
              value={this.state.delEmail}
              onChange={(e) => {
                this.handleChange(e);
              }}
            ></input>
            Enter Password:
            <input
              type="text"
              name="delPassword"
              value={this.state.delPassword}
              onChange={(e) => {
                this.handleChange(e);
              }}
            ></input>
            <input type="submit" value="Submit"></input>
          </form>
          <p class="mt-5 mb-3">© 2021</p>
          <div>
            <Container>
              <Row>
                <Col>
                  <Dropdown.Item onClick={() => this.handleHome()}>
                    Home
                  </Dropdown.Item>
                </Col>
                <Col>
                  <Dropdown.Item onClick={() => this.handleAbout()}>
                    About
                  </Dropdown.Item>
                </Col>
                <Col>
                  <Dropdown.Item>Track</Dropdown.Item>
                </Col>
                <Col>
                  <Dropdown.Item onClick={() => this.handleTips()}>
                    Tips
                  </Dropdown.Item>
                </Col>
                <Col>
                  <Dropdown.Item onClick={() => this.handleContact()}>
                    Contact
                  </Dropdown.Item>
                </Col>
              </Row>
            </Container>
          </div>
        </main>
      </div>
    );
  }
}

export default Account;
