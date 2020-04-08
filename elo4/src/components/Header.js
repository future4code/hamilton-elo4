import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import elo4logo from "../img/logo-Elo4.png";
import InputBase from "@material-ui/core/InputBase";
import SearchIcon from "@material-ui/icons/Search";
import { fade } from "@material-ui/core/styles/colorManipulator";
import cart from "../img/icones/carrinho-de-compras.png";
import Button from "@material-ui/core/Button";

class Header extends Component {
  render() {
    const { classes } = this.props;

    return (
      <AppBar>
        <Toolbar className={classes.toolBar}>
          <Grid container justify="space-between" alignItems="center">
            <Grid item>
              <img src={elo4logo} style={{ height: "48px" }} />
            </Grid>
            <Grid item>
              <div className={classes.search}>
                <div className={classes.searchIcon}>
                  <SearchIcon />
                </div>
                <InputBase
                  placeholder="Search…"
                  classes={{
                    root: classes.inputRoot,
                    input: classes.inputInput,
                  }}
                />
              </div>
            </Grid>
            <Grid item>
              <Button color="secondary" variant="fab">
                <img src={cart} style={{ height: "36px" }} />
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

const styles = (theme) => ({
  toolBar: {
    flex: 1,
  },
  searchIcon: {
    width: theme.spacing.unit * 9,
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  inputRoot: {
    color: "inherit",
    width: "100%",
  },
  inputInput: {
    paddingTop: theme.spacing.unit,
    paddingRight: theme.spacing.unit,
    paddingBottom: theme.spacing.unit,
    paddingLeft: theme.spacing.unit * 10,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200,
      },
    },
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing.unit,
      width: "auto",
    },
  },
});

export default withStyles(styles)(Header);
