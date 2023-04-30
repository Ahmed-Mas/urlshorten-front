import React, { Component } from "react";

class URLOutput extends Component{
    render() {
        return (
            <div>
                <a href={this.props.shorturl} target="_blank" rel="noopener noreferrer" className="urloutput">{this.props.shorturl}</a>
                {
                    this.props.shorturl && 
                    <button onClick={() => {navigator.clipboard.writeText(this.props.shorturl)}}>copy url</button>
                }
            </div>
        )
    }
}

export default URLOutput; 