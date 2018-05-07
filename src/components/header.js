import React from "react";
import { Link } from "react-router-dom";

export default class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper" style={{ padding: "10px", backgroundColor:"lightblue" }}>
                    <Link to={{ pathname: `/` }}>
                        <h4 className="logoText">CoverYoDoggo</h4>
                    </Link>
                </div>
            </nav>
        );
    }
}
