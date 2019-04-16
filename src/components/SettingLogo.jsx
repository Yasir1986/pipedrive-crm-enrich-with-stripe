import React, { Component } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import "../styles/css/SettingLogo.css";
import styled from "styled-components";
import { Popover } from "@material-ui/core";
import { Link } from "react-router-dom";

const styles = theme => ({
  typography: {
    margin: theme.spacing.unit * 6
  },
  popover: {
    margin: theme.spacing.unit * -4,
    marginLeft: theme.spacing.unit * 2
  }
});

class SettingLogo extends Component {
  state = {
    anchorEl: null
  };

  handleClick = event => {
    this.setState({
      anchorEl: event.currentTarget
    });
  };

  handleClose = () => {
    this.setState({
      anchorEl: null
    });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div className="setting-logo">
        <p className="setting-text" onClick={this.handleClick}>
          RD
        </p>
        <Popover
          className={classes.popover}
          open={open}
          anchorEl={anchorEl}
          onClose={this.handleClose}
        >
          <Wrapper>
            <p className={classes.typography}>
              <Link to="/setting">Setting</Link>
            </p>
            <p className={classes.typography}>
              <Link to="/login">Log out</Link>
            </p>
          </Wrapper>
        </Popover>
      </div>
    );
  }
}

SettingLogo.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(SettingLogo);

const Wrapper = styled.div`
  background-color: #b4aeae;
  float: right;
  border-radius: 0px;
`;
