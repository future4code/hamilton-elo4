import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import classNames from 'classnames';
import MenuItem from '@material-ui/core/MenuItem';
import TextField from '@material-ui/core/TextField';
import Styled from "styled-components";
import axios from 'axios';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justify: 'center',
    alignItems: 'center,'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 220,
  },
  button: {
    margin: theme.spacing.unit,
    padding: 8,
    height: 50,
  },
});

const currencies = [
  {
    value: 'Artigos para festas',
    label: 'Artigos para festas',
  },
  {
    value: 'Objetos de decoração',
    label: 'Objetos de decoração',
  },
  {
    value: 'Bijuterias',
    label: 'Bijuterias',
  },
  {
    value: 'Produtos religiosos',
    label: 'Produtos religiosos',
  },
  {
    value: 'Enxovais',
    label: 'Enxovais',
  },
  {
    value: 'Acessórios eco-friendly',
    label: 'Acessórios eco-friendly',
  },
];

const payments = [
  {
    value: 'À vista',
    label: 'À vista',
  },
  {
    value: 'Parcelado',
    label: 'Parcelado',
  },
];


class FormProduct extends React.Component {
  state = {
    name: '',
    productName: '',
    category: '',
    parcell: undefined,
    productValue: undefined,
    paymentMethod: undefined,
    productDescription: '',
    productUrl: '',
    
  };

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  handleChange = productName => event => {
    this.setState({
      [productName]: event.target.value,
    });
  };
  handleChange = category => event => {
    this.setState({
      [category]: event.target.value,
    });
  };

  handleChange = productValue => event => {
    this.setState({
      [productValue]: event.target.value,
    });
  };
  handleChange = paymentMethod => event => {
    this.setState({
      [paymentMethod]: event.target.value,
    });
  };
  handleChange = parcell => event => {
    this.setState({
      [parcell]: event.target.value,
    });
  };
  handleChange = productUrl => event => {
    this.setState({
      [productUrl]: event.target.value,
    });
  };
  handleChange = productDescription => event => {
    this.setState({
      [productDescription]: event.target.value,
    });
  };
  AddProduct = () => {
    const body = {
      name: this.state.name,
      description: this.state.productDescription,
      price: this.state.productValue,
      paymentMethod: this.state.paymentMethod,
      category: this.state.category,
      photos: [this.state.productUrl],
      installments: this.state.parcell,
    };
     axios.post(`https://us-central1-future-apis.cloudfunctions.net/elo4/products`, body, {
        headers: {
          "Content-Type": "application/json",          
        }
      }).then((response)=>{
        alert("Produto adicionado com sucesso!");
      }).catch ((error)=> {
        alert("Erro ao adicionar o produto.");
      })
  };
 
  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <Grid container
          direction="column"
          justify="center"
          alignItems="center">
          <h2>Cadatro de produtos</h2>
          <p>Seja bem vindo ao Elo4, nós estamos aqui para facilitar o caminho do seu produto até o seu cliente.</p>
          <p>Nosso cadastro é simples e rápido, você só precisa preencher os dados deste formulário e o seu produto já vai estar disponível para milhares de pessoas.</p>
        </Grid>
        <Grid container
          direction="column"
          justify="center"
          alignItems="center">
          <TextField
            id="outlined-name-do-produto"
            label="Nome do produto"
            className={classes.textField}
            value={this.state.productName}
            onChange={this.handleChange('productName')}
            helperText="Faça uma descrição simples do produto"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="categoria"
            select 
            label="Categoria"
            className={classes.textField}
            value={this.state.category}
            onChange={this.handleChange('category')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Selecione a categoria"
            margin="normal"
            variant="outlined"
          >
            {currencies.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        
          <TextField
            id="forma-pagamento"
            select 
            label="Forma de pagamento"
            className={classes.textField}
            value={this.state.paymentMethod}
            onChange={this.handleChange('paymentMethod')}
            SelectProps={{
              MenuProps: {
                className: classes.menu,
              },
            }}
            helperText="Selecione a forma de pagamento"
            margin="normal"
            variant="outlined"
          >
            {payments.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        
          <TextField
            id="preço-do-produto"
            label="Preço do produto"
            className={classes.textField}
            value={this.state.productValue}
            onChange={this.handleChange('productValue')}
            type="number"
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            margin="normal"
            variant="outlined"
          />
        
          <TextField
            id="parcelas"
            label="Parcelas"
            className={classes.textField}
            value={this.state.parcell}
            onChange={this.handleChange('parcell')}
            helperText="Defina a quantidade de parcelas de 1 a 5"
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="url-do-produto"
            label="Link da foto do produto"
            value={this.state.productUrl}
            onChange={this.handleChange('productUrl')}
            className={classes.textField}
            InputLabelProps={{
              shrink: true,
            }}
            helperText=""
            margin="normal"
            variant="outlined"
          />

          <TextField
            id="descrição-do-produto"
            label="Descrição do produto"
            multiline
            rowsMax="4"
            value={this.state.productDescription}
            onChange={this.handleChange('productDescription')}
            className={classes.textField}
            margin="normal"
            helperText="Faça uma descrição detalhada do produto"
            variant="outlined"
          />
        
          <Button 
          size="medium"
          variant="contained" 
          color="primary" 
          className={classes.button}
          onClick={this.AddProduct}>
          Adicionar produto
          </Button>
          </Grid>
      </form>
    );
  }
}

;
export default withStyles(styles)(FormProduct);