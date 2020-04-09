import React, { Component } from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PokemonPillow from "../img/alm-pokemon.jpg";
import { CardMedia, Paper } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { Add, Remove, Delete } from "@material-ui/icons/";

class CartProduct extends Component {
  render() {
    const { classes } = this.props;

    return (
      <Grid item xs={12}>
        <Paper>
          <Grid container className={classes.grid} alignItems="center">
            <Grid item xs={2}>
              <CardMedia className={classes.media} image={PokemonPillow} />
            </Grid>
            <Grid item xs={2}>
              <Typography variant="title">Pokemon Pillow</Typography>
            </Grid>
            <Grid item xs></Grid>
            <Grid item>
              <Button variant="contained">
                <Add />
              </Button>
            </Grid>
            <Grid item xs={1}>
              <Grid container item justify="center">
                <Typography variant="headline">12</Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Button variant="raised">
                <Remove />
              </Button>
            </Grid>
            <Grid item xs></Grid>
            <Grid item xs={1}>
              <Grid container item justify="center">
                <Typography variant="headline">R$10,00</Typography>
              </Grid>
            </Grid>
            <Grid item xs></Grid>
            <Grid item>
              <Button variant="fab" color="primary">
                <Delete />
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Grid>
    );
  }
}

const styles = {
  grid: {
    height: "64px",
    paddingRight: "10px",
  },
  media: {
    height: "64px",
    width: "100%",
  },
};

export default withStyles(styles)(CartProduct);
