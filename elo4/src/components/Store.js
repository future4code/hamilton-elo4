import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import StoreProduct from "./StoreProduct";
import SideMenu from "./SideMenu";

class Store extends Component {
  state = {
    categoryFilter: "todos",
  };

  handleChangeCategoryFilter = (val) => {
    this.setState({
      categoryFilter: val,
    });
  };

  render() {
    const { productList, addToCart, searchInput } = this.props;
    return (
      <Grid container>
        <SideMenu
          handleChangeCategoryFilter={this.handleChangeCategoryFilter}
          xs={3}
        />
        <Grid xs={9} item container justify="flex-start" spacing={24}>
          {productList
            .filter(
              (product) =>
                product.name.toUpperCase().indexOf(searchInput.toUpperCase()) >
                  -1 &&
                (this.state.categoryFilter === "todos" ||
                  product.category.toUpperCase() ===
                    this.state.categoryFilter.toUpperCase())
            )
            .map((product) => (
              <StoreProduct
                key={product.id}
                product={product}
                addToCart={() => addToCart(product)}
              />
            ))}
        </Grid>
      </Grid>
    );
  }
}

export default Store;
