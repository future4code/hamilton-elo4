import React, { Component } from "react";
import Header from "./components/Header";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import Store from "./components/Store";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import api from "./services/api";

class App extends Component {
  state = {
    productList: [
      {
        id: "Q8cybKtKmAEQphrXccQO",
        paymentMethod: "card",
        photos: ["https://picsum.photos/300/200"],
        name: "Produto",
        installments: 3,
        category: "Categoria 1",
        price: 10,
        description: "Esse é um produto muito legal!",
      },
    ],
    cartList: [],
    page: "store",
    searchInput: "",
  };

  // componentDidMount() {
  //   api
  //     .get("products")
  //     .then((response) => {
  //       console.log(response);
  //       this.setState({
  //         productList: response.data.products,
  //       });
  //     })
  //     .catch((err) => {
  //       alert(err);
  //     });
  // }

  addToCart = (product) => {
    let cartProduct = this.state.cartList.find((p) => p.id === product.id);

    if (cartProduct) {
      cartProduct.amount++;
    } else {
      cartProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        photo: product.photos[0],
        amount: 1,
      };
      this.state.cartList.push(cartProduct);
    }

    this.setState({
      cartList: [...this.state.cartList],
    });
  };

  handleChangeAmount = (id, val) => {
    if (val < 0) {
      let cartProduct = this.state.cartList.find((p) => p.id === id);
      if (cartProduct.amount <= -val) {
        this.setState({
          cartList: this.state.cartList.filter((product) => product.id !== id),
        });
        return;
      }
    }

    this.setState({
      cartList: this.state.cartList.map((product) =>
        product.id === id
          ? { ...product, amount: product.amount + val }
          : product
      ),
    });
  };

  handleSearchChange = (event) => {
    this.setState({
      searchInput: event.target.value,
    });
  };

  togglePage = (val) => {
    this.setState({
      page: val,
    });
  };

  render() {
    const { page, productList, cartList, searchInput } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Container>
          <Header
            searchInput={searchInput}
            page={page}
            handleSearchChange={this.handleSearchChange}
            togglePage={this.togglePage}
          />
          {page === "cart" ? (
            <Cart
              cartList={cartList}
              handleChangeAmount={this.handleChangeAmount}
            />
          ) : (
            <Store
              searchInput={searchInput}
              productList={productList}
              addToCart={this.addToCart}
            />
          )}
          <Footer />
        </Container>
      </MuiThemeProvider>
    );
  }
}

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffc84a",
      main: "#f2970b",
      dark: "#ba6900",
      contrastText: "#000",
    },
    secondary: {
      light: "#6dffff",
      main: "#0be1f2",
      dark: "#00afbf",
      contrastText: "#000",
    },
  },
});

const Container = styled.div`
  position: absolute;
  width: 100%;
  min-height: 100vh;
  box-sizing: border-box;
  padding: 72px 8px 108px 8px;

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`;

export default App;
