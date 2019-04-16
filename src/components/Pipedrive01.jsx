import React, { Component, Fragment } from "react";
import logo from "../styles/images/vainulogo.png";
import check from "../styles/images/checklogo.png";
import pipedrivelogo from "../styles/images/pipedrivelogo.png";
import "../styles/css/Pipedrive01.css";
import Search from "../components/Search.jsx";
import SettingLogo from "../components/SettingLogo.jsx";
import { Link } from "react-router-dom";
//import ButtonTextChange from './ButtonTextChange';

class Pipedrive01 extends Component {
  constructor(props) {
    super();
    this.state = {
      btnText: true,
      on: false
    };
  }
  toggle = () => {
    this.setState({
      on: !this.state.on
    });
  };
  ChangeButtonText = () => {
    this.setState({
      btnText: !this.state.btnText
    });
  };
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
            <Link to="/pipedrive">
              <button
                className="disconnect-btn"
                type="button"
                onClick={() => {
                  alert("Disconnecting...");
                }}
              >
                Disconnect Pipeline
              </button>
            </Link>
            <span className="com-in-pipe">11123 companies in Pipedive</span>
            <div className="start-btn-div">
              <button
                onClick={event => {
                  this.toggle();
                  this.ChangeButtonText();
                }}
                className="start-btn"
                type="button"
              >
                {this.state.btnText
                  ? "Start enrichment"
                  : "Enriching ../.. leads"}
              </button>
              {/* <button className="btn-again"
                              onClick={console.log("jkh")}
                            >Enrich again now
                            </button> */}
              <div className="search-companies">
                {this.state.on && (
                  <h4>
                    <Search />
                    {/* <ButtonTextChange 
                                   
                                    /> */}
                  </h4>
                )}
              </div>
              {/* This also works to render search component
                             {this.state.on ? <Search /> : null}   */}
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Pipedrive01;
