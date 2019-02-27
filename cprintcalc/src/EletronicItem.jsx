import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
export default class EletronicItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: "",
      password: "",
      hours: 0
      // "DataSource" is some global data source
    };
  }
  onChangeHours = ev => {
    console.log(this.state.hours);
    this.setState({ hours: ev.target.value });
    console.log(this.state.hours);
  };
  onChangeAmount = ev => {
    this.setState({ amount: ev.target.value });
  };
  render() {
    let { ranges, name, power } = this.props;
    return (
      <div
        className="itemContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "row"
        }}
      >
        <h3>{name}:</h3>
        <TextField
          style={{
            marginLeft: 10
          }}
          select
          variant="outlined"
          helperText={name}
          value={this.state.amount}
          onChange={this.onChangeAmount}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Qtd.</InputAdornment>
            )
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          style={{
            marginLeft: 10
          }}
          id="outlined-adornment-weight"
          variant="outlined"
          label="Horas de uso"
          value={this.state.hours}
          onChange={this.onChangeHours}
          InputProps={{
            endAdornment: <InputAdornment position="end">Horas</InputAdornment>
          }}
        />
      </div>
    );
  }
}
