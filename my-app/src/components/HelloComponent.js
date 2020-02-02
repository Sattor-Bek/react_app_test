import React, { Component } from 'react';

class Hello extends Component {
  constructor (props) {
    super(props);
      this.state = {
      usstate: props.initState,
      desc: 'user name'
      };
    this.onSubmit = this.onSubmit.bind(this);
    }

  onSubmit(e){
    e.preventDefault();
    this.setState({ usstate: e.target.value});
    console.log("onSubmit");
    console.log(this.state.desc);
  }


  render() {
    if (this.state.desc === "user name") {
      return (
        <form onSubmit={this.onSubmit}>
          <input
            value={this.state.desc}/>
          <div>
            <button type="submit">OK</button>
          </div>
        </form>
      );} else {
        return (
        <h1>Hello, {this.state.usstate}</h1>
        );
    }
  }
}

export default Hello;
