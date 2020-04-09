import React, { Component } from "react";
import Header from "./components/Header";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import Store from "./components/Store";
import Footer from "./components/Footer";
import Cart from "./components/Cart";
import FormProduct from "./components/FormProduct";

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
  justify-content: center;
  align-items: center;
`;


class App extends React.Component {
  state = {
    onCart: false,
  };

  toggleCart = (val) => {
    this.setState({
      onCart: val,
    });
  };

  render() {
    const { onCart } = this.state;

    return (
      <MuiThemeProvider theme={theme}>
        <Container>
          <Header toggleCart={this.toggleCart} />
           {/* {onCart ? <Cart /> : <Store />} */}
          <FormProduct/>
          <Footer />
        </Container>
      </MuiThemeProvider>
    );
  }
}





export default App;
