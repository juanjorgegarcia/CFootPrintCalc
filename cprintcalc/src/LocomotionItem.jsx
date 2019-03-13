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
    const result = minutes * 31 * power * 365 * 22;
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
          width: "600px",
          justifyContent: "space-between",
          flexDirection: "row"
        }}
      >
        <h3>{name}:</h3>

        <TextField
          style={{
            marginLeft: 10,
            width: "150px"
          }}
          select
          variant="outlined"
          helperText={name}
          value={this.state.minutes}
          onChange={this.onChangeMinutes}
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
    );
  }
}
