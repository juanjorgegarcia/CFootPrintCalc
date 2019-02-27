import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import { FormHelperText } from "@material-ui/core";
import EletronicItem from "./EletronicItem";
import LocomotionItem from "./LocomotionItem";
import Button from "@material-ui/core/Button";

const ranges = [
  {
    value: "0",
    label: "0"
  },
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  }
];
const EletronicItems = [
  { name: "Ar Condicionado", power: 5 },
  { name: "Aparelho de Som", power: 1500 }
];
const LocomotionItems = [
  { name: "Onibus", power: 5 },
  { name: "Carro", power: 1500 }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
      // "DataSource" is some global data source
    };
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };
  calculate = () => {
    this.setState({ result: 20 });
    console.log(this.state.result);
  };
  render() {
    const { result } = this.state;
    return (
      <div
        className="App"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: 20
        }}
      >
        <h1>Eletronicos:</h1>
        {EletronicItems.map((el, index) => (
          <EletronicItem key={index} name={el.name} ranges={ranges} />
        ))}
        <h1>Locomoção:</h1>

        {LocomotionItems.map((el, index) => (
          <LocomotionItem key={index} name={el.name} ranges={ranges} />
        ))}
        <Button style={{}} variant="outlined" onClick={this.calculate}>
          Calcular
        </Button>
        {result ? <h1>{result} Kgs de CO2e </h1> : null}
      </div>
    );
  }
}

export default App;
