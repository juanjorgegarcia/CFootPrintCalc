import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";
export default class EletronicItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      amount: 0,
      hours: 0,
      power: this.props.power,
      result: 0
      // "DataSource" is some global data source
    };
  }
  onChangeHours = ev => {
    // console.log(this.state.hours);
    this.setState({ hours: ev.target.value }, this.calculate);
  };
  onChangeAmount = ev => {
    this.setState({ amount: ev.target.value }, this.calculate);
  };
  calculate = () => {
    const { hours, amount, power } = this.state;
    const result = (hours * amount * 365 * power * 0.11) / 1000;
    this.setState(
      {
        result: result
      },
      this.props.onResultChange(result)
    );
  };

  render() {
    let { ranges, name, power } = this.props;
    return (
      <div
        className="itemContainer"
        style={{
          display: "flex",
          width: "600px",
          justifyContent: "space-between",
          flexDirection: "row"
        }}
      >
        <h3>{name}:</h3>
        <div
          className="itemContainer"
          style={{
            display: "flex",
            flexDirection: "row"
          }}
        >
          <TextField
            style={{
              marginLeft: 10,
              width: "150px"
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
              marginLeft: 10,
              width: "150px"
            }}
            select
            variant="outlined"
            helperText={name}
            value={this.state.hours}
            onChange={this.onChangeHours}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">Horas</InputAdornment>
              )
            }}
          >
            {ranges.map(option => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </div>
      </div>
    );
  }
}
