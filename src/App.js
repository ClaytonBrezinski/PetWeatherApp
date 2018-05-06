import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/header";
import Footer from "./components/footer";
import Dashboard from "./components/dashboard";
import CreatePet from "./components/createPet";
import PetDetail from "./components/petDetail";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <body>
                    <Route component={Header} />
                    <main className="row">
                        <Switch>
                            <Route exact path="/" component={Dashboard} />
                            <Route exact path="/createPet" component={CreatePet} />
                            <Route exact path="/:id" component={PetDetail} />
                        </Switch>
                    </main>
                    <Route component={Footer} />
                </body>
            </BrowserRouter>
        );
    }
}

export default App;
