import React from "react";
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Button } from "material-ui";
import { Link} from "react-router-dom";
import axios from "axios";

export default class DashboardView extends React.Component {
    state = {
        petList: [],
    };
    componentDidMount() {
        axios
            .get(`https://clay-pet-shelter-api.herokuapp.com/api/pets/`)
            .then(response => {
                const inData = response.data.data;
                const petList = inData.map(element => element);
                this.setState({ petList });
            })
            .catch(err => {
                console.error("err", err);
            });
    }
    render() {
        return (
            <div>
                <div className="row">
                    <h2>Choose your pet</h2>
                </div>
                <div className="row" style={{ marginBottom: "10px" }}>
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell>Type</TableCell>
                                    <TableCell>Breed</TableCell>
                                    <TableCell>Location</TableCell>
                                    <TableCell />
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.state.petList.map(pet => (
                                    <TableRow hover key={pet.id}>
                                        <TableCell>{pet.name}</TableCell>
                                        <TableCell>{pet.type}</TableCell>
                                        <TableCell>{pet.breed}</TableCell>
                                        <TableCell>{pet.location}</TableCell>
                                        <TableCell>
                                            <Link
                                                to={{
                                                    pathname: `/${pet.id}`,
                                                    state: {
                                                        id: pet.id,
                                                        name: pet.name,
                                                        location: pet.location,
                                                        lat: pet.lat,
                                                        long: pet.long,
                                                    },
                                                }}
                                            >
                                                <Button style={{ backgroundColor: "#64d8cb" }} variant="raised">
                                                    View
                                                </Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
                <div className="row">
                    <Link to={{ pathname: `/createPet` }}>
                        <Button style={{ backgroundColor: "#64d8cb" }} variant="raised">Add your own pet</Button>
                    </Link>
                </div>
            </div>
        );
    }
}
