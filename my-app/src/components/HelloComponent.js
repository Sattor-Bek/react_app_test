import React, { Component } from 'react';
import {NavbarText} from 'reactstrap';

class Hello extends Component {
  constructor (props) {
    super(props);
      this.state = {value: 'ユーザーネームを入力',
      userNameIs: false
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    this.setState({userNameIs: true})
    alert('あなたのユーザーネームは　' + this.state.value + ' です');
    event.preventDefault();
  }


  render() {
    if (this.state.userNameIs === false) {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit"/>
        </form>
      );
    } else {
      return (
      <NavbarText>  こんにちは、{this.state.value}さん</NavbarText>
      );
    }
  }
}

export default Hello;
