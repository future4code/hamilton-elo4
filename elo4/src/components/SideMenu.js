import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default class SideMenu extends Component {
  render() {
    const { xs, handleChangeCategoryFilter } = this.props;

    const categories = [
      "todos",
      "artigos para festas",
      "objetos de decoração",
      "bijuterias",
      "produtos religiosos",
      "enxovais",
      "acessórios eco-friendly",
    ];

    return (
      <Grid xs={xs} item container direction="column">
        <Grid item>
          <Typography variant="h5">Categorias</Typography>
        </Grid>
        {categories.map((category) => (
          <Grid item key={category}>
            <Button onClick={() => handleChangeCategoryFilter(category)}>
              {category}
            </Button>
          </Grid>          
        ))}
        <Grid>
        <Typography variant="h5">Filtros</Typography>
          <p>Valor Mínimo:</p>
          <Grid>
            <input
              type="number"
              min="0"
              max="10000"
              value={this.props.filtroMinimo}
              onChange={this.onChangeFilterMin}
              placeholder="Valor Mínimo"
            />
          </Grid>
          <p>Valor Máximo:</p>
          <Grid>
            <input
              type="number"
              min="0"
              max="10000"
              value={this.props.filtroMaximo}
              onChange={this.onChangeFilterMax}
              placeholder="Valor Máximo"
            />
          </Grid>
        </Grid>
      </Grid>
    );
  }
}
