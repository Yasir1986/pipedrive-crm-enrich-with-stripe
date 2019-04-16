import React, { Component, Fragment } from "react";
import "../styles/css/Login.css";
import logo from "../styles/images/vainulogo.png";
import loginImage from "../styles/images/login.png";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";

class Login extends Component {
  state = {
    password: "",
    showPassword: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    return (
      <Fragment>
        <div className="container">
          <div className="logo-div">
            <img src={logo} alt="logo" className="vainu-logo" />
          </div>
          <div className="title">
            <h1>Welcome to Vainu Pipedrive standalone integration</h1>
          </div>
          <div className="small-text">
            <p>Let's start by setting up Vainu account</p>
          </div>
          <div className="image-div">
            <img src={loginImage} alt="loginImage" className="login-image" />
          </div>
          <div className="login-inputs">
            <div className="full-name">
              <TextField
                placeholder="Full Name"
                margin="normal"
                variant="outlined"
                style={{ width: "150%" }}
              />
            </div>
            <div className="email">
              <TextField
                placeholder="Robert.deniro@vainu.io"
                margin="normal"
                variant="outlined"
                style={{ width: "150%" }}
              />
            </div>
            <div className="pass-input">
              <TextField
                type={this.state.showPassword ? "text" : "password"}
                value={this.state.password}
                onChange={this.handleChange("password")}
                placeholder="Password"
                margin="normal"
                variant="outlined"
                style={{ width: "150%" }}
              />
            </div>
            <div>
              <Link to="/pipedrive">
                <button
                  className="next-btn"
                  onClick={() => {
                    alert("Logging In......");
                  }}
                >
                  <p className="btn-text">NEXT</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Login;
