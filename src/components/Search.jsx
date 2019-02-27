import React, { Component } from 'react'
import axios from 'axios';

class Search extends Component {
  constructor(props) {
    super();
    this.state = {
        temp : []
    };
}

  componentDidMount(){
    axios.get('/api/poll_async_processes/')
      .then(res => {
        // console.log(temp);
        const temp = res.data;  
        this.setState({ temp });
    });
}
  render() {
    // console.log(persons.data.id);
    return (
      <div>
            <ul>
              { this.state.temp.map(temp1 => <li>{temp1.state}</li>)}
              {/* { this.state.temp && this.state.temp.map(temp1 => <li>{temp1.owner}</li>)} */}
            </ul>
      </div>
    )
  }
}

export default Search;

