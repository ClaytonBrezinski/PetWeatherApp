import React from "react";
import { Button } from "material-ui";

export default class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer" style={{ textAlign: "center", padding: "15px", backgroundColor:"lightblue" }}>
                <p className="text-muted font-weight-light" style={{ margin: "0" }}>
                    <a style={{ color: "white" }} href="https://github.com/OriginalMidas">
                        Contact: Clayton Brezinski
                    </a>
                </p>
            </footer>
        );
    }
}
