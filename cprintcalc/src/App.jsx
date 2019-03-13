import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
import { FormHelperText } from "@material-ui/core";
import EletronicItem from "./EletronicItem";
import LocomotionItem from "./LocomotionItem";

const ranges = [...Array(11).keys()].map(i => ({ value: i, label: i + "" }));

const EletronicItems = [
  { name: "Ar Condicionado", power: 1500 },
  { name: "Aparelho de Som", power: 150 },
  { name: "Aspirador de Pó", power: 1000 },
  { name: "Bomba d'água", power: 300 },
  { name: "Cafeteira Elétrica", power: 1000 },
  { name: "Chuveiro Elétrico", power: 4800 },
  { name: "Computador", power: 250 },
  { name: "Ferro Elétrico", power: 1000 },
  { name: "Microondas", power: 1300 },
  { name: "Freezer", power: 400 },
  { name: "Geladeira 1 Porta", power: 200 },
  { name: "Geladeira 2 Portas", power: 300 },
  { name: "Lavadora de Louça", power: 1500 },
  { name: "Lavadora de Roupa", power: 530 },
  { name: "Liquidificador", power: 350 },
  { name: "Secador de Cabelo", power: 900 },
  { name: "Televisão", power: 90 },
  { name: "Ventilador Portátil", power: 75 },
  { name: "Ventilador de Teto", power: 200 }
];
const LocomotionItems = [
  { name: "Carro a Etanol", power: 0.152 },
  { name: "Carro a Gasolina", power: 0.172 },
  { name: "Carro a GNV", power: 0.13 },
  { name: "Moto", power: 0.0616 },
  { name: "Onibus", power: 2.27 / 50 },
  { name: "Trem/Metro", power: 0.002 }
];
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: null
    };
  }
  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleResult = res => {
    this.setState(state => ({ result: this.state.result + res }));
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
        <h1>Uso de Eletronicos no dia:</h1>
        {EletronicItems.map((el, index) => (
          <EletronicItem
            key={index}
            name={el.name}
            ranges={ranges}
            power={el.power}
            onResultChange={this.handleResult}
          />
        ))}
        <h1>Uso de Locomoção no dia:</h1>

        {LocomotionItems.map((el, index) => (
          <LocomotionItem
            key={index}
            name={el.name}
            ranges={ranges}
            power={el.power}
            onResultChange={this.handleResult}
          />
        ))}

        {result ? <h1>{result.toFixed(2)} Kgs de CO2e </h1> : null}
      </div>
    );
  }
}

export default App;
