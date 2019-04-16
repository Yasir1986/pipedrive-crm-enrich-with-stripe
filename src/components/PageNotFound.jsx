import React, { Component, Fragment } from "react";
import nopage from "../styles/images/nopage.png";
import "../styles/css/PageNotFound.css";
import { Link } from "react-router-dom";

class PageNotFound extends Component {
  render() {
    return (
      <Fragment>
        <div className="no-page">
          <Link to="/">
            <img src={nopage} alt="404" />
          </Link>
        </div>
      </Fragment>
    );
  }
}

export default PageNotFound;
