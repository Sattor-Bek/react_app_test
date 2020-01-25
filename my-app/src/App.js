import React from 'react';
import './App.css';
import { Navbar } from 'reactstrap' ;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: 0};
  }

  // handleClick method
  handleClick() {
    this.setState({count: this.state.count + 1});
  }

  render() {
    return (
      <div>
        <h1>{this.state.count} </h1>
        <button onClick={()=>{this.handleClick()}}> + </button>

        <div className="loader" id="loader-1"></div>

      </div>
    );
  }
}

export default App;
