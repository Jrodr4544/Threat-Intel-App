import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import TagFilter from '../components/filters/tagFilter'

class FilterContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputFilter: '',
      tagFilter: ''

//      datasourceFilter: '',
//      platformFilter: ''
    };
  }

  handleOnFilterChange = event => {
     //debugger
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value
    }, () => {
      this.props.filterPulses(this.state);
    });
  }

  handleInputChange = event => {
    // debugger
    this.setState({
      ...this.state,
      inputFilter: event.target.value
    }, () => {
      this.props.filterPulses(this.state);
    });
  }

  render() {
    // debugger

    return (
      <div>
	    {/* FilterContainer */}

	    {/* Add functionality to sort pulses on created date */}

	<Form>
	      <Form.Group className="mb-3" controlId="formBasicEmail">
		<Form.Label>Filter Pulses</Form.Label>
		<Form.Control name="inputFilter" type="text" placeholder="Enter text" value={this.state.inputFilter} onChange={this.handleInputChange}/>
		<Form.Text className="text-muted">
	    		Random Text Here
		</Form.Text>
	      </Form.Group>
	

	      <input type="checkbox" id="checkbox1" name="checkbox" onClick={ this.props.sortPulses } ></input>
	      <label for="checkbox1"> 
		<Form.Text className="text-muted">
	    		Sort on date created		
	        </Form.Text>
	      </label>

	</Form>

	    { this.props.tags !== undefined ? (
		  <div name='filters'>
		    <TagFilter tags={this.props.tags} changeFilter={this.handleOnFilterChange} />
		  </div>
	    ):(
		  <div name='filters'>
		    Filters
		  </div>
	    )}

        <br></br>

      </div>
    );
  }
};

const mapStateToProps = state => {
    debugger
  return {
    tags: state.filters.tags
  };
}

export default connect(mapStateToProps)(FilterContainer);
