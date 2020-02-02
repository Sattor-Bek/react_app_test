import React, { Component } from 'react';
import {Form, Input, NavbarText, Button} from 'reactstrap';

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
        <Form onSubmit={this.handleSubmit} className="">
          <Input type="text" value={this.state.value} onChange={this.handleChange} className="rounded" placeholder="ユーザーネームを入力"/>
          <Button color="secondary" type="submit" value="Submit" className="" >Submit</Button>{' '}
        </Form>
      );
    } else {
      return (
      <NavbarText>  こんにちは、{this.state.value}さん</NavbarText>
      );
    }
  }
}

export default Hello;
