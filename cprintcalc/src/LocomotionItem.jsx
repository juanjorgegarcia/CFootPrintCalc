import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
import MenuItem from "@material-ui/core/MenuItem";

export default class LocomotionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0,
      power: this.props.power
      // "DataSource" is some global data source
    };
  }
  onChangeMinutes = ev => {
    this.setState({ minutes: ev.target.value }, this.calculate);
  };
  calculate = () => {
    const { minutes, power } = this.state;
    const result = ((minutes * 31) / 60) * power * 365;
    this.setState(
      {
        result: result
      },
      this.props.onResultChange(result)
    );
  };
  //   onChangeAmount = ev => {
  //     this.setState({ amount: ev.target.value });
  //   };
  render() {
    let { ranges, name } = this.props;
    return (
      <div
        className="itemContainer"
        style={{
          display: "flex",
          justifyContent: "center",
          alignContent: "center",
          flexDirection: "row",
          padding: 10
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
          value={this.state.minutes}
          onChange={this.onChangeMinutes}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Minutos</InputAdornment>
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
    );
  }
}
