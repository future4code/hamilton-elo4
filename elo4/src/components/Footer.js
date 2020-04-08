import React, { Component } from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import visa from "../img/icones/visa.png";
import mastercard from "../img/icones/mastercard.png";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import youtube from "../img/icones/youtube.png";
import instagram from "../img/icones/instagram.png";
import facebook from "../img/icones/facebook.png";
import Fab from "@material-ui/core/Fab";

const styles = {
  footer: {
    position: "absolute",
    top: "auto",
    bottom: 0,
    height: "100px",
  },
  media: {
    width: "100%",
    height: "100%",
  },
  paper: {
    height: 20,
    width: 40,
    padding: 2,
  },
  toolbar: {
    flex: 1,
  },
  socialMedia: {
    width: 36,
    height: 36,
  },
};

class Footer extends Component {
  render() {
    const { classes } = this.props;
    return (
      <AppBar className={classes.footer} color="primary">
        <Toolbar className={classes.toolbar}>
          <Grid container>
            {/** Meios de pagamento */}
            <Grid xs={6} item container direction="column">
              <Grid item>
                <Typography variant="title">MEIOS DE PAGAMENTO:</Typography>
              </Grid>
              <Grid item container spacing={8}>
                <Grid item>
                  <Paper className={classes.paper}>
                    <CardMedia className={classes.media} image={visa} />
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper className={classes.paper}>
                    <CardMedia className={classes.media} image={mastercard} />
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
            {/** Redes Sociais */}
            <Grid container xs={6} spacing={16} justify="flex-end">
              <Grid item>
                <Fab color="secondary">
                  <CardMedia
                    className={classes.socialMedia}
                    image={instagram}
                  />
                </Fab>
              </Grid>
              <Grid item>
                <Fab color="secondary">
                  <CardMedia className={classes.socialMedia} image={youtube} />
                </Fab>
              </Grid>
              <Grid item>
                <Fab color="secondary">
                  <CardMedia className={classes.socialMedia} image={facebook} />
                </Fab>
              </Grid>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    );
  }
}

export default withStyles(styles)(Footer);
