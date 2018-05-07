import React from "react";
import { Button, TextField } from "material-ui";
import { Link } from "react-router-dom";
import axios from "axios";

export default class CreatePetView extends React.Component {
    state = {
        name: "",
        type: "",
        breed: "",
        location: "",
        lat: "",
        long: "",
    };
    handleChange(event) {
        this.setState({ [event.target.id]: event.target.value });
    }
    formSubmit() {
        console.log();
        axios({
            method: "post",
            url: "/createPet",
            data: {
                name: this.state.name,
                type: this.state.type,
                breed: this.state.breed,
                location: this.state.location,
                lat: parseInt(this.state.lat),
                long: parseInt(this.state.long),
            },
        })
            .then(function(response) {
                // console.log(response);
                //Perform action based on response
            })
            .catch(function(error) {
                // console.log(error);
                //Perform action based on error
            });
        // return to main page
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <h2>Add pet to CoverYoDoggo</h2>
                </div>
                <div className="row">
                    <form onSubmit={() => this.formSubmit()}>
                        <TextField
                            fullWidth
                            id="name"
                            label="Name"
                            onChange={event => this.handleChange(event)}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            id="type"
                            label="type"
                            onChange={event => this.handleChange(event)}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            id="breed"
                            label="breed"
                            onChange={event => this.handleChange(event)}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            id="location"
                            label="location"
                            onChange={event => this.handleChange(event)}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            id="lat"
                            label="lat"
                            onChange={event => this.handleChange(event)}
                            margin="normal"
                        />
                        <TextField
                            fullWidth
                            id="long"
                            label="long"
                            onChange={event => this.handleChange(event)}
                            margin="normal"
                        />
                        <Button style={{ backgroundColor: "#64d8cb" }} type="submit" variant="raised">
                            Submit
                        </Button>
                        <Link to={{ pathname: `/` }}>
                            <Button style={{ backgroundColor: "#ff94c2" }} variant="raised">
                                Return
                            </Button>
                        </Link>
                    </form>
                </div>
            </div>
        );
    }
}
