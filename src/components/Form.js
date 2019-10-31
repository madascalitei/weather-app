import React from "react";

const Form = props => (
  <form onSubmit={props.getWeather}>
    <input type="text" name="city" id="city-input" placeholder="City..." />
    <input
      type="text"
      name="country"
      id="country-input"
      placeholder="Country..."
    />
    <button className="btn btn-primary">Get Weather</button>
  </form>
);

export default Form;
