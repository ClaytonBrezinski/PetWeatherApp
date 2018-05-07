import React from "react";
import { Button } from "material-ui";
import { Link } from "react-router-dom";
// import axios from "axios";

export default class PetDetails extends React.Component {
    state = {
        niceDay: "",
    };
    componentDidMount() {
        this.determineWeather();
    }

    determineWeather() {
        // const lat = this.props.location.state.lat;
        // const long = this.props.location.state.long;
        // axios
        //     .get(`/darkSky/${lat},${long}`)
        //     .then(response => {
        //         console.log(response)
        //     })
        //     .catch(err => {
        //         console.error("err", err);
        //     });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <h2>Does {this.props.location.state.name} need an umbrella?</h2>
                </div>
                <div className="row">
                    <Link to={{ pathname: `/` }}>
                        <Button style={{ backgroundColor: "#64d8cb" }} variant="raised">Return</Button>
                    </Link>
                </div>
            </div>
        );
    }
}
