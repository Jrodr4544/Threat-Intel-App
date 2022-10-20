import React, { Component } from 'react';
import { fetchPulses } from '../actions/index';
import { connect } from 'react-redux';

class PulsesContainer extends Component {
	constructor(props) {
		super(props);

		// this.state = {}
	
	}

	render() {
		
		return (
			<div>
				<h1>PulsesContainer</h1>
			</div>
		)
	}
}

export default connect(null, { fetchPulses })(PulsesContainer);
