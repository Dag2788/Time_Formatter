import React, { Component } from "react";
import axios from "axios";

let endpoint = "http://localhost:8080";

class TimeFormats extends Component {
  constructor(props) {
    super(props);

    this.state = {
      task: "",
    };
  }

  componentDidMount() {
    this.getTask();
  }

  getTask = () => {
    axios.get(endpoint + "/api/task").then(res => {
      if (res.data) {
        console.log("Success");
        console.log(res);
        this.setState({
            task: res.data
          });
      } else {
        console.log("Error");
        console.log(res);
      }
    });
  };



  render() {

    return (
      <div>
        <div className="row">
          <div className="header" as="h2">
              {this.state.task}
          </div>
        </div>
      </div>
    );
  }
}

export default TimeFormats;