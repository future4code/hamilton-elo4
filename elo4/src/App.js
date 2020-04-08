import React, { Component } from "react";
import Header from "./components/Header";
import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import styled from "styled-components";
import Store from "./components/Store";
import Footer from "./components/Footer";

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
  padding: 72px 8px 312px 8px;
`;

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Container>
          <Header />
          <Store />
          <Footer />
        </Container>
      </MuiThemeProvider>
    );
  }
}

export default App;
