import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import InputAdornment from "@material-ui/core/InputAdornment";
export default class LocomotionItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      minutes: 0
      // "DataSource" is some global data source
    };
  }
  onChangeMinutes = ev => {
    this.setState({ minutes: ev.target.value });
  };
  //   onChangeAmount = ev => {
  //     this.setState({ amount: ev.target.value });
  //   };
  render() {
    let { ranges, name, power } = this.props;
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
          id="outlined-adornment-weight"
          variant="outlined"
          label="Horas de uso"
          value={this.state.minutes}
          onChange={this.onChangeMinutes}
          InputProps={{
            endAdornment: <InputAdornment position="end">Horas</InputAdornment>
          }}
        />
      </div>
    );
  }
}
