import React from "react";
import { Button} from "material-ui";

export default class Header extends React.Component {
    render() {
        return (
            <nav>
                <div className="nav-wrapper" style={{ padding: "10px" }}>
                    <h4 className="logoText">CoverYoDoggo</h4>
                </div>
            </nav>
        );
    }
}
