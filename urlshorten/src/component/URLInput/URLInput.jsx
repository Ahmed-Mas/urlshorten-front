import React, { Component } from "react";

class URLInput extends Component {
    render() {
        return (
            <div className="URLInput">
                <input placeholder="Long URL..." onKeyDown={this.props.send}></input>
            </div>
        )
    }
}

export default URLInput;