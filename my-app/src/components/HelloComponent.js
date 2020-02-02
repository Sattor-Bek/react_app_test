import React, { Component } from 'react';
import {Input, NavbarText, Button} from 'reactstrap';

class Hello extends Component {
  constructor (props) {
    super(props);
      this.state = {value: '',
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
            <Input type="text" value={this.state.value} onChange={this.handleChange} className="rounded shadow-sm" placeholder="ユーザーネームを入力"/>
          </label>
           <Button color="secondary" type="submit" value="Submit" className="ml-2" >Submit</Button>{' '}
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
