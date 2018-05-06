import React from "react";
import { Paper, Table, TableBody, TableCell, TableHead, TableRow, Button } from "material-ui";
import { Link } from "react-router-dom";
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
                <div className="row">DashboardView here </div>
                <div className="row">
                    <Paper>
                        <Table>
                            <TableHead>
                                <TableRow onClick={console.log("clicked2")}>
                                    <TableCell>Name</TableCell>
                                    <TableCell numeric>Type</TableCell>
                                    <TableCell numeric>Breed</TableCell>
                                    <TableCell numeric>Location</TableCell>
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
                                                to={`/pets/:${pet.id}`}
                                                params={{
                                                    id: pet.id,
                                                    name: pet.name,
                                                    location: pet.location,
                                                    lat: pet.lat,
                                                    long: pet.long,
                                                }}
                                            >
                                                <Button>View</Button>
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </Paper>
                </div>
            </div>
        );
    }
}
