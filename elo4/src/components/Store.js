import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import PokemonPillow from "../img/alm-pokemon.jpg";
import StoreProduct from "./StoreProduct";
import SideMenu from "./SideMenu";

class Store extends Component {
  render() {
    return (
      <Grid container>
        <SideMenu xs={3} />
        <Grid xs={9} item container justify="flex-start" spacing={24}>
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
          <StoreProduct img={PokemonPillow} />
        </Grid>
      </Grid>
    );
  }
}

export default Store;
