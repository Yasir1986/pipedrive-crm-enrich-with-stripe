import React, { Component, Fragment } from "react";
import logo from "../styles/images/vainulogo.png";
import check from "../styles/images/checklogo.png";
import pipedrivelogo from "../styles/images/pipedrivelogo.png";
import "../styles/css/Pipedrive.css";
import TextField from "@material-ui/core/TextField";
import SettingLogo from "./SettingLogo";
import { Link } from "react-router-dom";
//import { Button } from '@material-ui/core';
//import classNames from 'classnames';

class Pipedrive extends Component {
  render() {
    //      const { classes } = this.props;
    return (
      <Fragment>
        <div className="full-container">
          <div className="left-half">
            <div className="logo-div">
              <img src={logo} alt="logo" className="vainu-logo" />
            </div>
            <div className="pipedrivelogo-div">
              <img src={pipedrivelogo} alt="logo" className="drive-logo" />
            </div>
          </div>
          <div className="right-half">
            <SettingLogo />
            <div className="checklogo-div">
              <img src={check} alt="checklogo" className="check-logo" />
            </div>
            <div className="main-text">
              <h1>You have successfully subcribed to Vainu</h1>
              <h1>Pipedrive standalone integration</h1>
            </div>
            <form
              className="pipe-form-div"
              // action="/action_page.php"
              //validate autoComplete="on"
            >
              <div className="pipe-email-input">
                <TextField
                  required
                  label="email"
                  placeholder="robert.deniro@vainu.io"
                  margin="normal"
                  style={{ width: 260 }}
                  // className={classes.textField}
                />
              </div>
              <div className="pipe-pass-input">
                <TextField
                  required
                  label="password"
                  placeholder="***********"
                  type="password"
                  margin="normal"
                  style={{ width: 260 }}
                  // className={classes.textField}
                />
              </div>
              <Link to="/pipedrive01">
                <button
                  className="connect-btn"
                  name="connect"
                  type="button"
                  onClick={() => {
                    alert("Connecting to Vainu Pipedrive......");
                  }}
                >
                  Connect
                </button>
              </Link>
            </form>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Pipedrive;
