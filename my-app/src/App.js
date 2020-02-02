import React from 'react';
import './App.css';
import { Navbar, NavbarBrand } from 'reactstrap' ;
import './App.css';
import Menu from './components/MenuComponent';
import Hello from './components/HelloComponent';

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
        <div className="App">
          <Navbar dark color="primary">
            <div className="container">
              <NavbarBrand href="/" >Ristorante Con Fusion </NavbarBrand>
            <Hello/>
            </div>
          </Navbar>
          <Menu/>
        </div>
        <h1>{this.state.count} </h1>
        <button onClick={()=>{this.handleClick()}}> + </button>

        <div className="loader" id="loader-1"></div>

      </div>
    );
  }
}

export default App;
