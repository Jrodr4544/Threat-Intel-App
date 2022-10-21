import React, { Component } from 'react';
import { fetchPulses } from '../actions/index';
import { connect } from 'react-redux';

import PulseList from '../components/PulseList';

class PulsesContainer extends Component {
	constructor(props) {
		super(props);

		this.state = {
			pulses: []
		}
	
	}

	componentDidMount() {
		debugger
		this.props.fetchPulses().then(
			response => {
				this.setState({
					pulses: response 
				})
			}
		)
	}

	render() {
		
		return (
			<div>
				<h1>PulsesContainer</h1>
				<PulseList 
					pulses={ this.state.pulses }
				/>
			</div>
		)
	}
}

export default connect(null, { fetchPulses })(PulsesContainer);
