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
import eyestrain from "./woman-with-digital-eye-strain-678x446.jpg";
import comp from "./Small-Article-EyeStrain-Woman-compressor.jpg";
import Track from "./Track";
import Login from "./Login";
import About from "./About";
import Contact from "./Contact";
import Account from "./Account";

class Tips extends React.Component {
  constructor() {
    super();
    this.state = {
      signin: false,
      about: false,
      track: false,
      tips: true,
      contact: false,
      account: false,
    };
  }

  handleHome() {
    this.setState({
      signin: true,
    });
  }

  handleTrack() {
    if (this.props.logined) {
      this.setState({
        track: true,
      });
    } else {
      alert("Please login.");
    }
  }

  handleAbout() {
    this.setState({
      about: true,
    });
  }

  handleContact() {
    this.setState({
      contact: true,
    });
  }

  handleAccount() {
    if (this.props.logined) {
      this.setState({
        account: true,
      });
    } else {
      alert("Please login.");
    }
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
          <About
            logined={this.props.logined}
            username={this.props.username}
            email={this.props.email}
          />
        </div>
      );
    }
    if (this.state.track) {
      return (
        <div>
          <Track
            logined={this.props.logined}
            username={this.props.username}
            email={this.props.email}
          />
        </div>
      );
    }
    if (this.state.contact) {
      return (
        <div>
          <Contact
            logined={this.props.logined}
            username={this.props.username}
            email={this.props.email}
          />
        </div>
      );
    }
    if (this.state.account) {
      return (
        <div>
          <Account
            logined={this.props.logined}
            username={this.props.username}
            email={this.props.email}
          />
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
                <Dropdown.Item onClick={() => this.handleAccount()}>
                  Account
                </Dropdown.Item>
              </div>
              <div class="droptd-content">
                <Dropdown.Item onClick={() => this.handleTrack()}>
                  Track
                </Dropdown.Item>
              </div>
              <div class="droptd-content">
                <Dropdown.Item>Tips</Dropdown.Item>
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
          <img src={eyestrain} alt="eyestrain"></img>
          <h1>Tips to reduce eye strain:</h1>
          <h2>1. Get a comprehensive eye exam.</h2>
          <p>
            Having a routine comprehensive eye exam every year is the most
            important thing you can do to prevent or treat computer vision
            problems. During your exam, be sure to tell your eye doctor how
            often you use a computer and digital devices at work and at home.
          </p>
          <p>
            {" "}
            Measure how far your eyes are from your screen when you sit at your
            computer, and bring this measurement to your exam so your eye doctor
            can test your eyes at that specific working distance.
          </p>
          <h2>2. Use proper lighting.</h2>
          <p>
            Eye strain often is caused by excessively bright light either from
            outdoor sunlight coming in through a window or from harsh interior
            lighting. When you use a computer, your ambient lighting should be
            about half as bright as that typically found in most offices.
            Eliminate exterior light by closing drapes, shades or blinds. Reduce
            interior lighting by using fewer light bulbs or fluorescent tubes,
            or use lower intensity bulbs and tubes. Also, if possible, position
            your computer screen so windows are to the side, instead of in front
            or behind it. Many computer users find their eyes feel better if
            they can avoid working under overhead fluorescent lights.{" "}
          </p>
          <p>
            If possible, turn off the overhead fluorescent lights in your office
            and use floor lamps that provide indirect "soft white" LED lighting
            instead. Sometimes switching to "full spectrum" fluorescent lighting
            that more closely approximates the light spectrum emitted by
            sunlight can be more comforting for computer work than regular
            fluorescent tubes. But even full spectrum lighting can cause
            discomfort if it's too bright. Try reducing the number of
            fluorescent tubes installed above your computer workspace if you are
            bothered by overhead lighting.
          </p>
          <h2>3. Minimize glare.</h2>
          <p>
            Glare from light reflecting off walls and finished surfaces, as well
            as reflections on your computer screen also can cause computer eye
            strain. Consider installing an anti-glare screen on your display
            and, if possible, paint bright white walls a darker color with a
            matte finish.
          </p>
          <p>
            If you wear glasses, purchase lenses with anti-reflective (AR)
            coating. AR coating reduces glare by minimizing the amount of light
            reflecting off the front and back surfaces of your eyeglass lenses.
          </p>
          <h2>4. Upgrade your display.</h2>
          <p>
            If you have not already done so, replace your old tube-style monitor
            (called a cathode ray tube or CRT) with a flat-panel LED
            (light-emitting diode) screen with an anti-reflective surface.
            Old-fashioned CRT screens can cause a noticeable "flicker" of
            images, which is a major cause of computer eye strain. Even if this
            flicker is imperceptible, it still can contribute to eye strain and
            fatigue during computer work.
          </p>
          <p>
            Complications due to flicker are even more likely if the refresh
            rate of the monitor is less than 75 hertz (Hz). If you must use a
            CRT at work, adjust the display settings to the highest possible
            refresh rate.
          </p>
          <p>
            When choosing a new flat panel display, select a screen with the
            highest resolution possible. Resolution is related to the "dot
            pitch" of the display. Generally, displays with a lower dot pitch
            have sharper images. Choose a display with a dot pitch of .28 mm or
            smaller. Also, choose a relatively large display. For a desktop
            computer, select a display that has a diagonal screen size of at
            least 19 inches.
          </p>
          <img src={comp} alt="comp"></img>
          <h2>5. Adjust your computer display settings.</h2>
          <p>
            Adjusting the display settings of your computer can help reduce eye
            strain and fatigue. Generally, these adjustments are beneficial:
          </p>
          <ul>
            <li>
              <b>Brightness: </b>Adjust the brightness of the display so it's
              approximately the same as the brightness of your surrounding
              workstation. As a test, look at the white background of this Web
              page. If it looks like a light source, it's too bright. If it
              seems dull and gray, it may be too dark.
            </li>
            <li>
              <b>Text size and contrast: </b>Adjust the text size and contrast
              for comfort, especially when reading or composing long documents.
              Usually, black print on a white background is the best combination
              for comfort.
            </li>
            <li>
              <b>Color temperature: </b>This is a technical term used to
              describe the spectrum of visible light emitted by a color display.
              Blue light is short-wavelength visible light that is associated
              with more eye strain than longer wavelength hues, such as orange
              and red. Reducing the color temperature of your display lowers the
              amount of blue light emitted by a color display for better
              long-term viewing comfort.
            </li>
          </ul>
          <h2>6. Blink more often.</h2>
          <p>
            Blinking is very important when working at a computer; blinking
            moistens your eyes to prevent dryness and irritation. When staring
            at a screen, people blink less frequently — only about one-third as
            often as they normally do — and many blinks performed during
            computer work are only partial lid closures, according to studies.
            Tears coating the eye evaporate more rapidly during long
            non-blinking phases and this can cause dry eyes. Also, the air in
            many office environments is dry, which can increase how quickly your
            tears evaporate, placing you at greater risk for dry eye problems.
          </p>
          <p>
            If you experience dry eye symptoms, ask your eye doctor about
            artificial tears for use during the day. By the way, don't confuse
            lubricating eye drops with the drops formulated to "get the red
            out." The latter can indeed make your eyes look better — they
            contain ingredients that reduce the size of blood vessels on the
            surface of your eyes to "whiten" them. But they are not necessarily
            formulated to reduce dryness and irritation. To reduce your risk of
            dry eyes during computer use, try this exercise: Every 20 minutes,
            blink 10 times by closing your eyes as if falling asleep (very
            slowly). This will help rewet your eyes.
          </p>
          <h2>7. Exercise your eyes.</h2>
          <p>
            Another cause of computer eye strain is focusing fatigue. To reduce
            your risk of tiring your eyes by constantly focusing on your screen,
            look away from your computer at least every 20 minutes and gaze at a
            distant object (at least 20 feet away) for at least 20 seconds. Some
            eye doctors call this the "20-20-20 rule." Looking far away relaxes
            the focusing muscle inside the eye to reduce fatigue.{" "}
          </p>
          <p>
            Another exercise is to look far away at an object for 10-15 seconds,
            then gaze at something up close for 10-15 seconds. Then look back at
            the distant object. Do this 10 times. This exercise reduces the risk
            of your eyes' focusing ability to "lock up" (a condition called
            accommodative spasm) after prolonged computer work. Both of these
            exercises will reduce your risk of computer eye strain. Also,
            remember to blink frequently during the exercises to reduce your
            risk of computer-related dry eye.
          </p>
          <h2>8. Take frequent breaks.</h2>
          <p>
            To reduce your risk for computer vision syndrome and neck, back and
            shoulder pain, take frequent screen breaks during your work day (at
            least one 10-minute break every hour). During these breaks, stand
            up, move about and stretch your arms, legs, back, neck and shoulders
            to reduce tension and muscle fatigue
          </p>
          <h2>9. Modify your workstation.</h2>
          <p>
            If you need to look back and forth between a printed page and your
            computer screen, place the written pages on a copy stand adjacent to
            your screen. Light the copy stand properly. You may want to use a
            desk lamp, but make sure it doesn't shine into your eyes or onto
            your computer screen.{" "}
          </p>
          <p>
            Poor posture also contributes to computer vision syndrome. Adjust
            your workstation and chair to the correct height so your feet rest
            comfortably on the floor. Position your computer screen so it's 20
            to 24 inches from your eyes. The center of your screen should be
            about 10 to 15 degrees below your eyes for comfortable positioning
            of your head and neck.
          </p>
          <h2>10. Consider computer glasses.</h2>
          <p>
            For the greatest comfort at your computer, you might benefit from
            having your eye doctor modify your eyeglasses prescription to create
            customized computer glasses. This is especially true if you normally
            wear contact lenses, which may become dry and uncomfortable during
            extended screen time.{" "}
          </p>
          <p>
            Computer glasses also are a good choice if you wear bifocals or
            progressive lenses, because these lenses generally are not optimal
            for the distance to your computer screen. Also, you may want to
            consider photochromic lenses or lightly tinted lenses for computer
            eyewear to reduce your exposure to potentially harmful blue light
            emitted by digital devices. Ask your eye doctor for details and
            advice.
          </p>
          <p class="mt-5 mb-3">© 2021</p>
        </main>
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
      </div>
    );
  }
}

export default Tips;
