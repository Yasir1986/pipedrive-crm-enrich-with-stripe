import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
      mainData: []
    };
  }
  fetchData() {
    const url = "api/poll_async_processes/";
    const tmp = [];
    fetch(url)
      .then(response => response.json())
      .then(inf => {
        inf.forEach(item => tmp.push(item));
        this.setState({ mainData: tmp });
      });
  }
  componentDidMount() {
    this.fetchData();
  }
  render() {
    return (
      <div>
        <h4>
          {this.state.mainData[0] &&
            this.state.mainData[0].meta_data.match_count}{" "}
          companies found on pipedrive
        </h4>
        <h4>
          {" "}
          {this.state.mainData[1] &&
            this.state.mainData[1].meta_data.current}{" "}
          matched companies
        </h4>
        <h4>
          {" "}
          {this.state.mainData[2] &&
            this.state.mainData[2].meta_data.total}{" "}
          updated compaines
        </h4>
      </div>
    );
  }
}

export default Search;
