import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";
import styled from "styled-components";
import CartProduct from "./CartProduct";

class Cart extends Component {
  render() {
    const { classes, cartList, handleChangeAmount } = this.props;

    const total = cartList.reduce(
      (total, product) => total + product.price * product.amount,
      0
    );

    return (
      <Container>
        <Grid container className={classes.grid} direction="column">
          {cartList.map((product) => (
            <CartProduct
              key={product.id}
              product={product}
              handleChangeAmount={handleChangeAmount}
            />
          ))}
        </Grid>
        <CartData>
          <Typography variant="display1">Total: R${total},00</Typography>
        </CartData>
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

  display: flex;
  justify-content: flex-end;
  padding: 8px 32px;
`;

export default withStyles(styles)(Cart);
