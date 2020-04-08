import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { withStyles } from "@material-ui/core/styles";

const styles = {
  footer: {
    position: "absolute",
    top: "auto",
    bottom: 0,
    height: "300px",
  },
};

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.footer} color="secondary">
        <Toolbar></Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Footer);
