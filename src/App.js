import React, { Component } from "react";

import Titles from "./components/Titles";
import Form from "./components/Form";
import Weather from "./components/Weather";

const API_KEY = "f7c96b74b943d5ccca2fe52e309f4514";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      city: undefined,
      country: undefined,
      temperature: undefined,
      humidity: undefined,
      description: undefined,
      error: undefined
    };
  }

  getWeather = async e => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`
    );
    const data = await api_call.json();

    if (city && country) {
      //console.log(data);

      this.setState({
        city: data.name,
        country: data.sys.country,
        temperature: data.main.temp,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        city: undefined,
        country: undefined,
        temperature: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the values."
      });
    }
  };

  render() {
    return (
      <div>
        <div className="wrapper">
          <div className="container">
            <div className="row-left">
              <Titles />
            </div>
            <div className="row-right">
              <Form getWeather={this.getWeather} />
              {this.state.city && this.state.country ? (
                <Weather
                  city={this.state.city}
                  country={this.state.country}
                  temperature={this.state.temperature}
                  humidity={this.state.humidity}
                  description={this.state.description}
                  error={this.state.error}
                />
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
