import React, { Component } from 'react';
import axios from 'axios';

class App extends Component {
  constructor(){
    super()
    
    this.state = {
      data: []
    }
  }
  componentDidMount() {
    axios.get('/api/product/brands')
    .then(response => this.setState({ data: response.data }) )
  }

  render() {
    const { data } = this.state ;

  return (
    <div className="App">
      My APP
      {data ? 
        data.map((data, index) => {
          return (
          <div key={index} >
            {data.name}
          </div>
          )
        }) : null 
      }
    </div>
  )}
}

export default App;
