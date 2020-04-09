import React, { Component } from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const styles = {
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  actions: {
    justifyContent: "center",
  },
  cardTitle: {
    display: "flex",
    justifyContent: "center;",
  },
};

class StoreProduct extends Component {
  render() {
    const { classes, product, addToCart } = this.props;

    return (
      <Grid item xs={4}>
        <Card>
          <CardContent className={classes.cardTitle}>
            <Typography variant="title">{product.name}</Typography>
          </CardContent>
          <CardMedia
            className={classes.media}
            image={product.photos[0]}
            title="Contemplative Reptile"
          />
          <CardContent>
            <Typography variant="title">R${product.price},00</Typography>
            <Typography variant="caption">10x R$1,00 sem juros</Typography>
          </CardContent>
          <CardActions className={classes.actions}>
            <Button variant="contained" color="primary" onClick={addToCart}>
              Adicionar ao Carrinho
            </Button>
          </CardActions>
        </Card>
      </Grid>
    );
  }
}

export default withStyles(styles)(StoreProduct);
