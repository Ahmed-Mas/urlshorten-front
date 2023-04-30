import React, { Component } from 'react';
import './App.css';
import Header from "./component/Header"
import URLInput from "./component/URLInput"
import URLOutput from "./component/URLOutput"
import { postURL } from "./api"


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shortUrl: ""
    }
    this.updateState = this.updateState.bind(this)
    this.send = this.send.bind(this)
  }

  updateState(shortUrl) {
    this.setState({shortUrl: shortUrl})
  }

  send(event) {
    if (event.key === 'Enter') {
      postURL(event.target.value)
      .then(response => {
        console.log("recieved: ", response)
        this.updateState(response.short_url)
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Header/>
        <URLInput send={this.send}/>
        <URLOutput shorturl={this.state.shortUrl}/>
      </div>
    )
  }
}

export default App;
