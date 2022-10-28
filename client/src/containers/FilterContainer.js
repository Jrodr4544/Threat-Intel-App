import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import TagFilter from '../components/TagFilter'

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
     debugger
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
		<h1>FilterContainer</h1>

	<Form>
	      <Form.Group className="mb-3" controlId="formBasicEmail">
		<Form.Label>Filter Pulses</Form.Label>
		<Form.Control name="inputFilter" type="text" placeholder="Enter text" value={this.state.inputFilter} onChange={this.handleInputChange}/>
		<Form.Text className="text-muted">
	    		Random Text Here
		</Form.Text>
	      </Form.Group>
		
	      <Form.Group>
		<Form.Check type="checkbox" label="Check me out" />
	      </Form.Group>
	      <Button variant="primary" type="submit">
		Submit
	      </Button>
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

	    {/*


        {this.props.filters.data_sources !== undefined ? (

          <div name='filters'>
            <TagFilter tags={this.props.filters.tags} changeFilter={this.handleOnFilterChange} />
            <PlatformFilter platforms={this.props.filters.platforms} changeFilter={this.handleOnFilterChange} />
          </div>

        ) : (
            <div>
              Filters
            </div>

          )}
	  */}
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
