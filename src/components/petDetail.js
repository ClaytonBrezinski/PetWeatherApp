import React from "react";
import { Button } from "material-ui";
var request = require("request");

export default class PetDetails extends React.Component {
    state = {
        niceDay: "",
    };
    determineWeather() {}
    render() {
        return (
            <div>
                <div className="row">
                    <h2>Does {this.props.location.state.name} need an umbrella?</h2>
                </div>
            </div>
        );
    }
}
