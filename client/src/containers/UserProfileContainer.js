import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { login } from '../actions/index'

class UserProfileContainer extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.handleInputChange = this.handleInputChange.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

//   handleOnFilterChange = event => {
//      //debugger
//     this.setState({
//       ...this.state,
//       [event.target.name]: event.target.value
//     }, () => {
//       this.props.filterPulses(this.state);
//     });
//   }

  handleSubmit = event => {
    debugger
    event.preventDefault()
    // trigger function that will call the action function
    // that will log someone in or register
    this.props.login(this.state)

  }

  handleInputChange = event => {
    //   debugger
    this.setState({
        ...this.state,
        [event.target.name]: event.target.value
      });
  }

  render() {
    // debugger

    return (
      <div>
	    {/* UserProfileContainer */}

	<Form onSubmit={ this.handleSubmit }>

        <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control name="email" type="email" placeholder="Enter email" value={this.state.email} onChange={ this.handleInputChange } />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control name="password" type="password" placeholder="Password" value={this.state.password} onChange={ this.handleInputChange } />
        </Form.Group>
        <Form.Text className="text-muted">
	    		Login form
        </Form.Text>
        <Button variant="dark" type="submit">Submit</Button>
	</Form>

      </div>
    );
  }
};

export default connect(null, { login })(UserProfileContainer);
