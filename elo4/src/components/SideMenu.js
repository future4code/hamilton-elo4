import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class SideMenu extends Component {
  render() {
    const { xs } = this.props;

    return (
      <Grid xs={xs} item container direction="column">
        <Grid item>
          <Typography variant="h5">Categorias</Typography>
        </Grid>
        <Grid item>
          <Button>artigos para festas</Button>
        </Grid>
        <Grid item>
          <Button>objetos de decoração</Button>
        </Grid>
        <Grid item>
          <Button>bijuterias</Button>
        </Grid>
        <Grid item>
          <Button> produtos religiosos</Button>
        </Grid>
        <Grid item>
          <Button>enxovais</Button>
        </Grid>
        <Grid item>
          <Button>acessórios eco-friendly</Button>
        </Grid>
      </Grid>
    );
  }
}
