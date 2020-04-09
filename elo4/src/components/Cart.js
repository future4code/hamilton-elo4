import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import CartProduct from "./CartProduct";

class Cart extends Component {
  render() {
    const { classes } = this.props;
    return (
      <Container>
        <Grid container className={classes.grid} direction="column">
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
          <CartProduct />
        </Grid>
        <CartData></CartData>
      </Container>
    );
  }
}

const styles = {
  grid: {
    flex: 1,
  },
};

const Container = styled.div`
  flex: 1;
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 50px 0;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 16px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const CartData = styled.div`
  border-top: 2px solid black;
  height: 200px;
  flex: none;
`;

export default withStyles(styles)(Cart);
