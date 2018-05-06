import React from "react";
import { Button } from "material-ui";
import axios from "axios";
const keys = require("../envs/keys.js");

export default class PetDetails extends React.Component {
    state = {
        niceDay: "",
    };
    componentDidMount() {
        this.determineWeather()
    }

    determineWeather() {
        const lat = this.props.location.state.lat;
        const long = this.props.location.state.long;
        console.log('apikey: ', keys.weatherAPIkey)
        axios
            .get(`https://api.darksky.net/forecast/${keys.weatherAPIkey}/${lat},${long}`)
            .then(response => {
                console.log(response)
            })
            .catch(err => {
                console.error("err", err);
            });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <h2>Does {this.props.location.state.name} need an umbrella?</h2>
                </div>
                <div className="row" />
            </div>
        );
    }
}
